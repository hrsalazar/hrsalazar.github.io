# Product Requirements Document (PRD v2)

## Crypto Options Signal Engine (COSE) + Kronos Validation Layer

---

## 1. Objective

Build a system that:

> Monitors BTC and ETH markets, detects trading opportunities using rule-based strategies, validates them using a time-series model (Kronos), calculates risk, and sends actionable alerts for manual execution.

---

## 2. Design Philosophy

- **Deterministic core** (strategies) → generates signals
- **Probabilistic layer** (Kronos) → validates signals
- **Human execution** → final decision

**Constraint:** Kronos must NOT replace strategies.

---

## 3. System Architecture

```
[Binance API] + [Deribit API]
        ↓
    Data Layer
        ↓
Strategy Engine (rule-based)
        ↓
Kronos Validation Layer
        ↓
   Signal Engine
        ↓
   Signal Filter
        ↓
  Options Mapper
        ↓
   Risk Engine
        ↓
Telegram Notification
        ↓
   Logging DB
```

---

## 4. Core Components

### 4.1 Data Layer

#### Sources

- **Binance API** → OHLCV data
- **Deribit API** → options data

#### Responsibilities

- Fetch BTC, ETH OHLCV
- Fetch options chain data
- Normalize data

---

### 4.2 Strategy Engine

#### Responsibilities

- Execute multiple strategies independently
- Return standardized signals

#### Initial Strategies

- Breakout + Volume
- Volume Reversal

---

### 4.3 Kronos Validation Layer

#### Purpose

Enhance signal quality using time-series modeling.

#### Responsibilities

- Evaluate OHLCV sequences
- Output probability score (0–1)
- Detect market regime

#### Constraints

- MUST NOT generate trades
- MUST NOT replace strategy logic

#### Input

```json
{
  "ohlcv": [...],
  "timeframe": "15m",
  "asset": "BTC"
}
```

#### Output

```json
{
  "kronos_score": 0.72,
  "regime": "TRENDING",
  "confidence_adjustment": 10
}
```

---

### 4.4 Signal Engine

#### Responsibilities

- Merge strategy signal + Kronos output
- Compute final confidence

#### Formula

```
final_confidence =
    (strategy_confidence * 0.7) +
    (kronos_score * 100 * 0.3)
```

---

### 4.5 Signal Filter

#### Rules

- Final confidence ≥ 75
- Max 1 signal per asset/direction
- Cooldown: 1 hour

---

### 4.6 Options Mapping Layer

#### Logic

- Bullish → SELL PUT
- Bearish → SELL CALL

#### Filters

- IV ≥ 60%
- Expiry: 7–14 days
- Liquidity threshold

---

### 4.7 Risk Engine

#### Input

- Account size
- Risk % (1%)

#### Output

- Position size
- Max loss

---

### 4.8 Notification Layer

#### Channel

- Telegram

#### Output Example

```
🚨 TRADE SIGNAL

Asset: BTC
Direction: BULLISH

Strategy:
- Breakout + Volume

Kronos:
- Score: 0.72
- Market: TRENDING

Options Trade:
- SELL PUT
- Expiry: 7 days

Risk:
- Position Size: $500
- Max Loss: $100

Confidence: 82%
```

---

### 4.9 Logging System

#### Stored Data

```json
{
  "timestamp": "...",
  "asset": "BTC",
  "strategy": "breakout_volume",
  "kronos_score": 0.72,
  "final_confidence": 82,
  "signal_sent": true
}
```

---

## 5. Functional Requirements

### FR1 — Strategy Execution

- Run multiple strategies independently
- Return standardized signals

---

### FR2 — Kronos Evaluation

- Input: OHLCV data
- Output: score (0–1)
- Latency < 500ms

---

### FR3 — Signal Fusion

- Combine strategy + Kronos
- Compute final confidence

---

### FR4 — Filtering

- Remove low-quality signals
- Enforce cooldown

---

### FR5 — Options Selection

- Filter by IV and expiry
- Map signal → options strategy

---

### FR6 — Notification

- Send alert within 5 seconds
- Include Kronos score

---

## 6. Non-Functional Requirements

### Performance

- Total latency < 2 seconds

### Reliability

- Retry API calls
- Fail gracefully

---

### Fallback Behavior

If Kronos fails:

> → Continue with strategy-only signals
> → Reduce confidence by 10%

---

## 7. Developer Implementation Plan

### Phase 1 (Days 1–6)

- Data layer
- Strategy engine
- Signal engine
- Telegram alerts

---

### Phase 2 (Days 7–8)

- Deribit integration
- Options filtering

---

### Phase 3 (Days 9–10)

- Kronos integration

---

### Kronos Integration Steps

#### 1. Create Adapter

```
app/learning/kronos_adapter.py
```

#### 2. Load Model

- Initialize at startup
- Cache in memory

#### 3. Interface

```python
def evaluate(df) -> dict:
    return {
        "kronos_score": float,
        "regime": str
    }
```

#### 4. Inject into Pipeline

```python
kronos_result = kronos.evaluate(df)
```

#### 5. Merge Outputs

```python
signal["final_confidence"] = ...
```

---

## 8. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Kronos overfitting | Use only as filter |
| Latency increase | Cache + optimize |
| Model instability | Fallback mode |
| False confidence | Limit weight to 30% |

---

## 9. Future Enhancements

### Regime-Based Strategy Switching

```
TRENDING → breakout strategies
RANGING  → reversal strategies
```

---

### Dynamic Risk Adjustment

> Low Kronos score → reduce position size

---

### Strategy Ranking

- Track win rate
- Track profit factor

---

### AI Layer

- Strategy generation
- Signal explanation

---

## 10. Definition of Done

System is complete when:

- [ ] Signals generated in real time
- [ ] Kronos scores integrated
- [ ] Telegram alerts actionable
- [ ] System runs continuously
- [ ] Fallback works correctly

---

## Final Notes

- Keep strategies simple
- Use Kronos only as validator
- Avoid overengineering
- Focus on execution and iteration
