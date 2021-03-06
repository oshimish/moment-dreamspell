import { Tone } from '../src/Tone';

test('Should get a number for a tone', () => {
  const tone = new Tone(1);
  expect(tone.number).toBe(1);
});

test('Should get a Cosmic tone for a zero', () => {
  const tone = new Tone(0);
  expect(tone.number).toBe(13);
});

test('Tone should be normilized', () => {
  const tone = new Tone(14);
  expect(tone.number).toBe(1);
});

test('Tone should be cloned from other tone', () => {
  const tone = new Tone(3);
  const tone2 = new Tone(tone);
  expect(tone.number).toBe(tone.number);
});

test('Tone 1 should have name', () => {
  const tone = new Tone(1);
  expect(tone.name).toBe('Magnetic');
});

test('Tone 13 should have name', () => {
  const tone = new Tone(13);
  expect(tone.name).toBe('Cosmic');
});
