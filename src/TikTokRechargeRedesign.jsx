import React, { useState } from "react";

// Demo UI: TikTok Recharge Coin — red theme
export default function TikTokRechargeRedesign() {
  const packs = [
    { id: 1, coins: 30, price: 0.31 },
    { id: 2, coins: 350, price: 3.65 },
    { id: 3, coins: 700, price: 7.25 },
    { id: 4, coins: 1400, price: 14.49 },
    { id: 5, coins: 3500, price: 36.2 },
  ];

  const [selectedPack, setSelectedPack] = useState(packs[1]);
  const [customAmount, setCustomAmount] = useState(1000);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  function formatPrice(p) {
    return `\$${p.toFixed(2)}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 text-slate-900 p-6">
      <header className="max-w-5xl mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-500 via-red-600 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-md">RC</div>
          <div>
            <h1 className="text-xl font-semibold">TikTok Recharge Coin</h1>
            <p className="text-sm text-slate-500">Demo / Educational — gerçek ödeme yok.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="px-4 py-2 rounded-lg bg-white shadow-sm border hover:shadow-md"
          >
            Giriş
          </button>
          <button
            onClick={() => setIsAdminOpen(true)}
            className="px-4 py-2 rounded-lg bg-red-600 text-white shadow hover:opacity-95"
          >
            Admin
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Coin Paketleri</h2>
          <p className="text-sm text-slate-500 mb-4">Demo fiyatlandırma — gerçek işlem yapılmaz.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {packs.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPack(p)}
                className={`p-4 rounded-xl border group text-left hover:shadow-md transition ${selectedPack.id === p.id ? 'border-red-600 bg-slate-50' : 'border-transparent bg-white'}`}>
                <div className="text-sm text-slate-500">Coins</div>
                <div className="text-2xl font-bold">{p.coins}</div>
                <div className="mt-2 text-sm text-slate-600">{formatPrice(p.price)}</div>
              </button>
            ))}

            <div className="col-span-2 md:col-auto">
              <label className="block text-sm text-slate-600 mb-1">Özel Miktar</label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                  className="flex-1 rounded-lg border p-3"
                />
                <button
                  onClick={() => setSelectedPack({ id: 'custom', coins: customAmount, price: parseFloat((customAmount / 1000 * 9).toFixed(2)) })}
                  className="px-3 py-2 rounded-lg bg-red-600 text-white"
                >Kullan</button>
              </div>
              <p className="text-xs text-slate-400 mt-2">Örnek fiyatlandırma gösterim amaçlıdır.</p>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl border bg-slate-50 flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">Seçili</div>
              <div className="text-lg font-semibold">{selectedPack.coins} coins — {selectedPack.price ? formatPrice(selectedPack.price) : '—'}</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setNotice('Demo satın alma akışı tetiklendi — gerçek ödeme yok.')}
                className="px-4 py-2 rounded-lg bg-red-600 text-white"
              >Satın Al</button>
              <button onClick={() => setNotice('Favorilere eklendi (demo).')} className="px-3 py-2 rounded-lg border">Kaydet</button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border">
              <h3 className="font-semibold">Davet Et & Ödül</h3>
              <p className="text-sm text-slate-500">Demo linkini paylaş, örnek 5% cashback kuponu kazan.</p>
            </div>

            <div className="p-4 rounded-xl border">
              <h3 className="font-semibold">Özel Teklif</h3>
              <p className="text-sm text-slate-500">Erken test kullanıcıları için mock faydalar.</p>
            </div>
          </div>
        </section>

        <aside className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold">Hesap</h3>
          <p className="text-sm text-slate-500">Giriş yaparak demo satın alımlarını kaydet.</p>

          <div className="mt-4">
            <div className="text-xs text-slate-500">Giriş Denemeleri: 0/5</div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setIsLoginOpen(true)} className="flex-1 px-4 py-2 rounded-lg border">Giriş</button>
              <button onClick={() => setNotice('İletişim: @demo')} className="px-3 py-2 rounded-lg bg-red-600 text-white">İletişim</button>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              <div className="mb-2">Educational / Demo Only</div>
              <div className="text-xs text-slate-400">Bu arayüz yalnızca UI mock'tur — gerçek ödeme yapılmaz.</div>
            </div>
          </div>
        </aside>
      </main>

      <footer className="max-w-5xl mx-auto mt-8 text-center text-sm text-slate-500">
        <div>Instagram: <a href="https://instagram.com/factsecrety" className="underline">@factsecrety</a> &nbsp; Telegram: <a href="https://t.me/factsecretyreal" className="underline">@factsecretyreal</a></div>
        <div className="mt-2">Demo amaçlı — gerçek işlemler içermez.</div>
      </footer>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-2">Giriş</h4>
            <div className="space-y-3">
              <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı adı" className="w-full border p-3 rounded-lg" />
              <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Parola" type="password" className="w-full border p-3 rounded-lg" />
              <div className="flex justify-end gap-2">
                <button onClick={() => { setIsLoginOpen(false); setNotice('Giriş iptal edildi'); }} className="px-4 py-2 rounded-lg border">İptal</button>
                <button onClick={() => { setIsLoginOpen(false); setNotice('Demo giriş başarılı (gerçek kimlik doğrulama yok)'); }} className="px-4 py-2 rounded-lg bg-red-600 text-white">Giriş</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Admin Panel (Demo)</h4>
              <button onClick={() => setIsAdminOpen(false)} className="text-slate-500">Kapat</button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="text-xs text-slate-500">Yeni Kullanıcı Oluştur</div>
                <input placeholder="Kullanıcı adı" className="w-full border p-2 rounded mt-2" />
                <input placeholder="Parola" className="w-full border p-2 rounded mt-2" />
                <select className="w-full border p-2 rounded mt-2">
                  <option>30 dakika (Test)</option>
                  <option>1 saat</option>
                  <option>1 gün</option>
                  <option>1 ay</option>
                </select>
                <button className="mt-3 w-full rounded-lg bg-emerald-600 text-white py-2">Oluştur</button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="text-xs text-slate-500">Müşteri Listesi</div>
                <div className="mt-3 text-sm">Toplam: 0 kullanıcı</div>
                <button className="mt-3 w-full rounded-lg border py-2">Süresi Dolanları Sil</button>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="text-xs text-slate-500">Parola Değiştir</div>
                <input placeholder="Kullanıcı adı" className="w-full border p-2 rounded mt-2" />
                <input placeholder="Yeni parola" className="w-full border p-2 rounded mt-2" />
                <button className="mt-3 w-full rounded-lg bg-amber-500 text-white py-2">Parolayı Değiştir</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notice toast */}
      {notice && (
        <div className="fixed bottom-6 right-6 bg-white border rounded-xl p-3 shadow">
          <div className="text-sm">{notice}</div>
          <div className="text-xs text-slate-400 mt-1 cursor-pointer" onClick={() => setNotice("")}>Kapat</div>
        </div>
      )}
    </div>
  );
}
