import { getHealthColor } from './healthUtils';

test('It returns green color hex code if health is below 50', () => {
	const hexCode = '#5cb85c';
	expect(getHealthColor(49)).toBe(hexCode);
});

test('It returns yellow color hex code if health is below 70 but above 50', () => {
	const hexCode = '#f0ad4e';
	expect(getHealthColor(69)).toBe(hexCode);
});

test('It returns yellow color if health is above 71', () => {
	const hexCode = '#f0ad4e';
	expect(getHealthColor(72)).toBe(hexCode);
});
