import * as _ from './styles';
export default function Card({ title, subtitle, director, description }) {
  return (
    <_.Card>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>By: {director}</h3>
      <p>{description}</p>
    </_.Card>
  );
}
