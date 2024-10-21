export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <p>Hello Detail</p>
      <p>{params.slug}</p>
    </div>
  );
}
