import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Titre par défaut'}</h1>;
}
 
export default function HomePage() {
  const names = ['Alice', 'Bob', 'Charles'];
 
  return (
    <div>
      <Header title="Bienvenue sur mon site React" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
 
      <LikeButton />
    </div>
  );
}