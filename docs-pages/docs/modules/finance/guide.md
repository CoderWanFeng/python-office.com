---
title: Finance 使用指南
description: 使用 python-office 进行金融计算
sidebar_position: 1
---

# 💰 Finance 模块使用指南

Finance 模块目前提供**股票 T+0 收益计算**功能。

## 核心场景

### 计算做 T 收益
```python
import office
profit = office.finance.t0(
    buy_price=11.99,
    sale_price=12.26,
    shares=700
)
print(f"做 T 收益：¥{profit:.2f}")
```

### 自定义费率
```python
profit = office.finance.t0(
    buy_price=10.00,
    sale_price=10.50,
    shares=1000,
    w_rate=3.0/10000,
    min_rate=5,
    stamp_tax=1.5/1000
)
```

## 计算公式

```
收益 = 卖出金额 - 买入金额 - 买入手续费 - 卖出手续费 - 印花税
```

完整 API 见 [Finance API 参考](/modules/finance/api)
