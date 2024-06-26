import test from 'ava';
import m from './index.js';

test('41.8904617N, 12.4746088W should return false for a point in an island', t => {
  t.false(m(41.890_461_7, 12.474_608_8));
});

test('41.890007N, 12.477570W should return false for a point in the river', t => {
  t.false(m(41.890_007, 12.477_57));
});

test('42.105019N, 12.316765W should return false for a point in the lake', t => {
  t.false(m(42.105_019, 12.316_765));
});

test('41.753859N, 12.223008W should return true for a point in the sea', t => {
  t.true(m(41.753_859, 12.223_008));
});
