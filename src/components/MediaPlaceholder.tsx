/**
 * Medya dosyası henüz eklenmemiş kartlar için kullanılan metalik/cam yüzey.
 * Sahte arayüz veya veri içermez; yalnızca fırçalanmış metal dokusu,
 * cam parlaması ve kontrollü marka mavisi ışık.
 */
export default function MediaPlaceholder({ subtle = false }: { subtle?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(148deg, #33383f 0%, #22262c 38%, #14171a 72%, #0c0e10 100%)",
        }}
      />

      {/* Fırçalanmış metal dokusu */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(116deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 6px)",
        }}
      />

      {/* Mavi atölye ışığı */}
      <div
        className="absolute -bottom-1/3 -left-1/5 h-[85%] w-[85%] rounded-full blur-3xl"
        style={{ background: `rgba(0, 119, 255, ${subtle ? 0.3 : 0.45})` }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(to top, rgba(0,174,239,0.22), transparent)",
        }}
      />

      {/* Cam parlaması */}
      <div
        className="absolute -top-1/3 right-[-10%] h-[80%] w-[70%] rounded-full blur-3xl"
        style={{ background: "rgba(255,255,255,0.1)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 34%)",
        }}
      />

      {/* İnce metalik çizgiler */}
      <div className="absolute inset-y-0 left-[16%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-y-0 right-[26%] w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent" />
      <div className="absolute inset-x-0 top-[22%] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-accent via-accent/25 to-transparent" />

      {/* Vinyet */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 45%, transparent 42%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
