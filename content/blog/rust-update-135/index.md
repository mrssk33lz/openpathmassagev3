---
title: "Rust Update 135"
description: "Rust Devblog 135"
lead: "This weeks update brings in the new Hazmat Suit redesign and tweaks some of the settings to the Radiation system to balance things out so that if you are wearing a full Hazmat Suit, you should take any Rads."
date: 2016-11-10
lastmod: 2016-11-10
draft: false
weight: 50
images: ["devblog-135.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-135.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update brings in the new Hazmat Suit redesign and tweaks some of the settings to the Radiation system to balance things out so that if you are wearing a full Hazmat Suit, you should take any Rads. The problem is that the suit takes up all armor slots and does not give much protection, so you better be quick about it! Aside from that, there are a lot of fixes this week in regards to last weeks big changes for the component system. Many of these were balancing tweaks, but another component was added this week called the Semi-auto Body. This component will be required to make the Semi-auto Pistol, and the Semi-auto Rifle. The devs thought the Semi-Auto Pistol was to OP and everyone was using it and nothing else until they got a rifle crafted. Sounds good to me, as I am really liking the change in the pace of the game with the component update.

Food boxes are back in this update, as well as some new skins for some items. It appears the Rust Workshop is creating cooler content than the devs thought and they are having a hard time keeping up. It just shows how creative the Rust community is. Whether it's unique base builds, player paintings in-game, or the vast amount of awesome Oxide plugins out there it's one of the most creative gaming communities I have been a part of. Last but not least, there is now a new Steam Inventory feature where you can break down some items you don't want into other items. It seems pretty cool for people who have been playing Rust for a while and have lots of duplicate items in their inventory. So far I don't have any duplicates. Aside from that there are the usual fixes and tweaks they have been working on for performance and sound enhancements. Check out the Rust Devblog for some sneak peaks at some upcoming alternative junk piles that should give relevant loot given the type of junk pile you find. It sounds like a neat concept. See the Changelog below for the full set of changes this week.

## Video Update
<iframe width="800" height="450" src="https://www.youtube.com/embed/2xtGtNnwB5o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 135
```
Fixed excess dsp usage on surround sound setups
Fixed physics sound lag when destroying loot boxes
Optimized reverb zone triggers
River sounds come in and out more smoothly
Wounded screams stop on death
Viewmodel sound timing tweaks
Ambient sound timing tweaks
Fixed placement effects spawning at the world origin when deploying objects to sockets
Misc sound polish
Added placement sounds for deployable building parts
Fixed decor NRE with pool.mode set to 2
Fixed chat graphics issues with pool.mode set to 2
Fixed building placement guide with pool.mode set to 2
Rewrote network group updating (less traffic, more robust)
Fixed editor-only components being included in release build
Fixed empty update being called on hundreds of entities (overhead)
Enabled pool.player_model by default on 64bit systems
Shortened prefab names in print_prefabs console command
Optimized some light components
Rocket launcher costs more HQM
Rockets cost an additional pipe
Oil Barrel HP lowered to 50
Waterpipe shotgun no longer needs pipe (lol)
Flamethrower balance - Much more fuel needed to raid
Flamethrower stream graphics tighter
Added Semi Auto Body (SAP/SAR component)
Reduced Spring and Sheet Metal HQM yield in recycler
Radiation has more of an exposure gradient
Reduced radpill spawns
SAR buffed
Added Food Box to Junk Piles
Added new full body hazmat suit
Reduced crafting costs of bone type armor
Added protection to wolf headdress
```
_Source: https://playrust.com/devblog-135/_