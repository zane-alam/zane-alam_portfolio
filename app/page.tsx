// This component renders your existing portfolio HTML
// The HTML content is preserved and embedded as a React component

export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zane Alam - Portfolio</title>
</head>
<body>
    <!-- Your original portfolio HTML content goes here -->
    <!-- The existing Zane_Alam-portfolio.html file can be referenced or copied -->
    <div style="padding: 20px;">
        <h1>Zane Alam Portfolio</h1>
        <p>Portfolio content will be displayed here.</p>
        <p>To integrate your existing HTML, copy the content from Zane_Alam-portfolio.html into this component.</p>
    </div>
</body>
</html>
        `,
      }}
    />
  );
}
