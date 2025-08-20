---
title: "Rust Update 134"
description: "Rust Devblog 134"
lead: "This weeks update removes the new(ish) XP system in replacement of the component based crafting system that has been in the works for a few patches on the pre-release branch. All blueprints are now open by default, but some most of the higher end crafted items will require 1 or more specialized components."
date: 2016-11-04
lastmod: 2016-11-04
draft: false
weight: 50
images: ["devblog-134.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-134.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update removes the new(ish) XP system in replacement of the component based crafting system that has been in the works for a few patches on the pre-release branch. All blueprints are now open by default, but some most of the higher end crafted items will require 1 or more specialized components. Radiation is also back in full effect, or at least the current effect. There are plans in the works to raise these levels to make the Hazmat Suit more of a requirement in some areas. It will be interesting to see how this plays into the balance of the loot game and possibly player building locations. Currently the settings are Low, Medium, and High. My guess is that this change is in preparation for the upcoming changes to the Hazmat Suit.

Here are some of the features of the new component system:

- No more locked items, no more blueprints, everything craftable from the start
- Items beyond basics (bow/burlap/furnace/eoka etc) require some kind of component
- Components are items which are uncraftable and only found in the world
- Radiation is back (albeit in a minor fashion)
- North/South division is NOT a thing (yet)

Components can be found in various locations such as barrels and junk piles, but complete weapons will no longer be able to be found in normal loot containers. Complete weapons will only be found in Air Drops and Heli Crates. We do run BetterLoot on our server, so you will find a more components than you will on vanilla, so we actually have completed guns except for the M249 removed. Some components like the Rifle Body, SMG Body, Tech Junk and Propane Tank are more rare than other components.

You can now also recycle some items into other items with the Recycler, which is found in various Rad Towns. Hopefully this item is made into a craftable item at some point. So far I know you can drop in some components and a new item called Sheet Metal to get metal fragments and HQM back out of the Recycler. It will be interesting to see how this item evolves in the game.

There are also a bunch of other fixes and tweaks you can see in the Changelog below. Check out the Rust Devblog to see some sneak peaks of a new high capacity pistol coming to Rust, the Beretta M92 pistol.

## Video Update
There is another video update summary video by Shadowfrax for those who don't like to read :) The video update is actually a really nice summary of all the changes included in this update, as the component system isn't the only new changes this week.

<iframe width="669" height="402" src="https://www.youtube.com/embed/XKLUinVEqUM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 134
```
Added new lighthouses to Hapis Island
Added a new radtown to Hapis Island
Changed the Hapis Island tunnels to mineshaft networks
Fixed player eyes looking glossed over
Fixed players not blinking
Fixed players not looking around
Added integrated workshop
Maps no longer have fog of war
Fixed clothing backfaces having weird lighting
Added collared shirt
Added tanktop
Added shorts
Sound occlusion enabled by default
No more hitmarkers when meleeing barrels
Added silenced lr300 and mp5 gunshots
Updated bullet flyby sounds
Misc minor sound polish
Improved water rendering and culling
Optimized terrain and terrain-blended rock/cliff shaders
Fixed incorrect network group subscriptions of players before spawn
Disabled a few irrelevant warnings for non-developers
Optimized prefab pooling (more to come next week)
Added prefab pooling to building conditional models
Added prefab pooling to renderer batching
Spawn group respawn rates are now scaled with the player count
Disabled rain until we can re-enable its particle collisions
Removed XP System
Added Component System
Added Recycler
Added Junkpiles
Added Radiation
Added loot scaling
```
_Source: https://playrust.com/devblog-134/_