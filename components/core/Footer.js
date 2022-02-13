function Footer() {
  function year() {
    const d = new Date();
    return d.getFullYear();
  }

  return (
    <footer>
      <div>
        <p>© {year()}, Evento by Julien Leguey</p>
      </div>
    </footer>
  );
}

export default Footer;
