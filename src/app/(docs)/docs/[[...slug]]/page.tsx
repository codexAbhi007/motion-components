const DocsHome = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;

  let content;
  switch (slug?.length) {
    case 1:
      content = <div>Viewing Docs for feature {slug[0]}</div>;
      break;
    case 2:
      content = (
        <div>
          Viewing Docs for feature {slug[0]} and concept {slug[1]}
        </div>
      );
      break;
    default:
      content = <div>Viewing Docs</div>;
  }

  return content;
};

export default DocsHome;
