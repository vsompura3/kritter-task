export default function TVLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
      {modal}
    </>
  );
}
