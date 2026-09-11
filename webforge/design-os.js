(() => {
  const frame = document.querySelector('#preview');
  const notice = document.querySelector('#host-notice');
  const allowed = ['localhost','127.0.0.1',''];
  const local = allowed.includes(location.hostname);
  notice.textContent = local
    ? 'Local development mode. Token edits are enabled.'
    : 'Preview-only mode on hosted builds. No persistent admin controls are exposed.';
  if (local) notice.classList.add('ok');

  const defaults = {
    '--cream':'#f4e6cc','--ink':'#111715','--swamp':'#173b32','--red':'#b62631','--gold':'#d6a43c','--pepper':'#e55c2f'
  };
  const state = {...defaults};

  function apply(){
    try {
      const root = frame.contentDocument.documentElement;
      Object.entries(state).forEach(([k,v]) => root.style.setProperty(k,v));
    } catch(e) {}
  }

  frame.addEventListener('load', apply);
  document.querySelectorAll('[data-token]').forEach(input => {
    input.addEventListener('input', () => { state[input.dataset.token] = input.value; apply(); });
  });

  document.querySelectorAll('[data-view]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-view]').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    frame.className = `preview ${btn.dataset.view}`;
  }));

  document.querySelector('#reload').addEventListener('click', () => frame.contentWindow.location.reload());
  document.querySelector('#reset').addEventListener('click', () => {
    Object.assign(state, defaults);
    document.querySelectorAll('[data-token]').forEach(input => input.value = defaults[input.dataset.token]);
    frame.contentWindow.location.reload();
  });
  document.querySelector('#export').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({tokens:state}, null, 2)], {type:'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'shaolin-slurp-design-tokens.json'; a.click(); URL.revokeObjectURL(a.href);
  });
})();