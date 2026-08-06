/** 首页 hero 右侧：彩色外链 portal（对齐 Wiki .mp-button 彩色块） */
const LINKS = [
  {
    text: 'Minecraft Wiki',
    href: 'https://zh.minecraft.wiki/w/Minecraft_Wiki:%E5%85%B3%E4%BA%8E',
    tone: 'wiki',
  },
  {
    text: '官方文档',
    href: 'https://learn.microsoft.com/zh-cn/minecraft/creator/',
    tone: 'ms',
  },
  {
    text: 'Bedrock Wiki',
    href: 'https://wiki.bedrock.dev/',
    tone: 'bedrock',
  },
  {
    text: 'MCBE Dev',
    href: 'https://wiki.mcbe-dev.net/',
    tone: 'mcbe',
  },
] as const;

export function HomeSocialLinks() {
  return (
    <aside className="sapi-home-links" aria-label="相关站点">
      <div className="sapi-home-links__title">相关站点</div>
      <div className="sapi-home-links__grid">
        {LINKS.map((link) => (
          <a
            key={link.href}
            className={`sapi-home-links__btn sapi-home-links__btn--${link.tone}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sapi-home-links__btn-label">{link.text}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
