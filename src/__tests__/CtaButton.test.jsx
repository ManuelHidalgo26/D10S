import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CtaButton from '../components/CtaButton';

describe('CtaButton', () => {
  it('applies primary styles by default', () => {
    render(<CtaButton href="/link">Click</CtaButton>);
    const link = screen.getByRole('link', { name: /click/i });
    expect(link.className).toContain('bg-dorado');
  });

  it('opens external links in new tab', () => {
    render(<CtaButton href="http://example.com">External</CtaButton>);
    const link = screen.getByRole('link', { name: /external/i });
    expect(link.getAttribute('target')).toBe('_blank');
  });
});
