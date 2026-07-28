import { Button } from './Button';

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>Button</h1>

      <section style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button type="primary" size="default" label="Primary / Default" />
        <Button type="primary" size="large" label="Primary / Large" />
        <Button type="ghost" size="default" label="Ghost / Default" />
        <Button type="ghost" size="large" label="Ghost / Large" />
        <Button type="primary" size="default" label="Disabled" disabled />
      </section>
    </main>
  );
}
