import { describe, expect, it } from 'vitest';
import { add } from './math';

describe('math test', () => {
	describe('add', () => {
		it('adds 1 + 2 to equal 3', () => {
			expect(add(1, 3)).toBe(4);
		});
	});
});
