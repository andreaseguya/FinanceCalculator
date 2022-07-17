
// @ts-check
import { Finance } from 'financejs';

let finance = new Finance();
// To calculate Amortization
finance.NPV

//using irr-npv
var irrnpv = require('irr-npv')
var moneys=[5000,3000,]
var rate=0.01
var npv=irrnpv.npv(moneys,rate)