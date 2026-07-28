import figma from '@figma/code-connect';
import { Button } from './Button';

/**
 * Code Connect mapping for the Button component set.
 * Figma component: https://www.figma.com/design/aYYBKoPZhx427tGUviUcG1/Code-Connect-Test?node-id=3-59
 *
 * Figma property → code prop:
 *   Label (TEXT)    → label
 *   Type  (VARIANT) → type  (Primary → 'primary', Ghost → 'ghost')
 *   Size  (VARIANT) → size  (Default → 'default', Large → 'large')
 */
figma.connect(
  Button,
  'https://www.figma.com/design/aYYBKoPZhx427tGUviUcG1/Code-Connect-Test?node-id=3-59',
  {
    props: {
      label: figma.string('Label'),
      type: figma.enum('Type', {
        Primary: 'primary',
        Outline: 'outline',
      }),
      size: figma.enum('Size', {
        Default: 'default',
        Large: 'large',
      }),
    },
    example: ({ label, type, size }) => (
      <div>
        <Button type={type} size={size} label={label} />
        <span>Hello</span>
      </div>
    
    ),
  }
);
