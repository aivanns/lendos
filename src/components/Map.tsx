const Map = () => {
  return (
    <div className="w-full h-full relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.3367051237801!2d37.75522792498567!3d55.72679889944736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab569259256cd%3A0x5d3d2d0ddfd24b3d!2z0JrQvtC70LvQtdC00LYg0YHQstGP0LfQuCDihJY1NA!5e0!3m2!1sru!2sru!4v1739480853650!5m2!1sru!2sru"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.2)]" />
    </div>
  );
};

export default Map; 