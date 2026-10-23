import test from 'node:test';import assert from 'node:assert/strict';import {scenarios} from './index.mjs';
import * as engine from '../muxreceipt-core/index.mjs';
for(const scenario of await scenarios())test(scenario.name,()=>assert.equal(engine.audit(scenario.input).status,scenario.expectedStatus));
