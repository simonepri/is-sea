import test from 'ava';

import m from '.';

test('41.8904617N, 12.4746088W should return false for a point in an island', t => {
  t.false(m(41.8904617, 12.4746088));
});

test('41.890007N, 12.477570W should return false for a point in the river', t => {
  t.false(m(41.890007, 12.477570));
});

test('42.105019N, 12.316765W should return false for a point in the lake', t => {
  t.false(m(42.105019, 12.316765));
});

// refactored to use maritime boundaries of 12nm.   Point in the sea more than 12nm.  
// https://github.com/simonepri/geo-maps/blob/master/info/countries-maritime.md

test('31.9592N,-80.4570W should return true for a point in the sea', t => {
  t.true(m(31.9592, -80.4570));
});
