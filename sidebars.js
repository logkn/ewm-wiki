/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wiki: [
    "index",
    {
      type: "category",
      label: "Player Characters",
      link: { type: "doc", id: "PCs/index" },
      items: [
        "PCs/aurelia-astryx",
        "PCs/baxibillion-stravos-iii",
        "PCs/ceylon-silvermere",
        "PCs/esralt-shymergrove",
        "PCs/mohammad-al-fellahi",
        "PCs/zera-springtoe"
      ]
    },
    {
      type: "category",
      label: "Non-Player Characters",
      link: { type: "doc", id: "NPCs/index" },
      items: [
        "NPCs/farland-springtoe",
        "NPCs/fydor-thuul",
        "NPCs/jarlox-gweden",
        "NPCs/monroe-hammerfist",
        "NPCs/nastenka-thuul",
        "NPCs/shawna-springtoe"
      ]
    },
    {
      type: "category",
      label: "Factions",
      link: { type: "doc", id: "Factions/index" },
      items: ["Factions/house-thuul"]
    },
    {
      type: "category",
      label: "Organizations",
      link: { type: "doc", id: "Organizations/index" },
      items: ["Organizations/kingsguard", "Organizations/tri-hilt-guild"]
    },
    {
      type: "category",
      label: "Lore",
      link: { type: "doc", id: "Lore/index" },
      items: [
        "Lore/abbathor",
        "Lore/feyrule-interregnum",
        "Lore/harkwall-mountains",
        "Lore/kahzel",
        "Lore/kaleidos",
        "Lore/long-winter",
        "Lore/pre-campaign-handout",
        "Lore/three-seasons"
      ]
    }
  ]
};

module.exports = sidebars;
