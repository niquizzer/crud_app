export default async function Home() {
  const api = "";
  const data = await fetch ("");
  const items = await data.json();
  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
