import type { Location } from './location.model';

export const ACT3_LOCATIONS: Location[] = [
  {
    id: 0,
    name: 'The Party',
    introText: `You arrive at Beekse Bergen to the sound of laughter.

Music plays across the open plaza, you drift between food stands and lines of families waiting for the safari tour. Children run past with drinks in their hands, the whole place alive with motion.

For a moment - it feels normal.

You walk deeper into the crowd, forcing yourself to slow down..

Employees move through the masses in bright uniforms, guiding people, smiling, pointing toward the safari buses.

"Next group this way!"
"Plenty of space left!"
"Keep moving, please!"

But something feels off.

One of the employees adjusts their sleeve.

Just for a second - You see it.

Black fabric underneath. And stitched into it -

The letter A.

Your chest tightens.

You look again.

Another employee. Same thing.

Then another.

They're everywhere.

Hidden in plain sight.

We must figure out what their plan is!`,
    good: 'You can blend in and gather information easily.',
    bad: "It's hard to tell who to trust.",
    attached: [1, 2],
  },
  {
    id: 1,
    name: 'Safari Boarding Area',
    introText: `The safari boarding area is crowded and tightly controlled, with lines of visitors being rushed toward a constant stream of waiting trucks. Employees move quickly, guiding people into the vehicles with unusual urgency, packing them far beyond capacity before sending them off without delay. The noise of engines and voices fills the space, yet everything feels too organized, as if every movement is part of a larger, unseen system.

Challenge. Sabotage a Safari Truck: Intellect 4

You can choose another investigator to make this check for you.`,
    good: `You manage to force open the panel and tamper with the mechanism just enough for the engine to stall, the vehicle grinding to an abrupt halt as confusion spreads among the cultists, their carefully timed system collapsing into disarray as voices rise and the tightly controlled flow of people breaks into chaos.

Remove 1 Doom`,
    bad: `You crouch down and fumble with the controls, but nothing makes sense to you and the system refuses to respond, leaving you back off just in time as the truck lurches forward and drives off, the cultists continuing their operation uninterrupted, their movements as precise and organized as before.

Add 1 Doom`,
    attached: [0, 2, 3],
  },
  {
    id: 2,
    name: 'Animal Enclosure Zone',
    introText: `You move away from the main paths, deeper into the enclosure area.

The noise of the crowd fades slightly here - but something else replaces it.

A low, constant tension.

The animals are restless.

Deer pace in tight circles, hooves striking the ground in uneven rhythm. Birds sit completely still, all facing the same direction.

Challenge. Release the animals: Combat 4

You can choose another investigator to make this check for you.`,
    good: `You force open the enclosure and trigger the release, and for a moment nothing happens until the animals surge forward all at once, breaking through barriers and spilling into the surrounding area, their sudden movement tearing apart the careful structure the cultists had put in place as panic spreads through the crowds and the entire operation collapses into chaos.

Remove 1 Doom`,
    bad: `You struggle with the lock, your hands slipping as you try to force it open without understanding the mechanism, and before you can react a low growl rises behind you as one of the larger enclosures gives way just enough for a lion to lunge, knocking you to the ground and clawing at you while you desperately fight it off, managing to escape only by sheer panic as you stumble away injured, leaving the animals contained and the cultists' ritual continuing undisturbed.

Add 1 Doom`,
    attached: [0, 1, 3],
  },
  {
    id: 3,
    name: 'Control and Operations Center',
    introText: `The control and operations center sits hidden behind a plain door, its interior starkly different from the chaos outside, with rows of monitors glowing in the dim light, each one showing a different part of the park.

Challenge. Study the video streams to figure out the cultists' plan: Willpower 4

You can choose another investigator to make this check for you.`,
    good: `You quickly piece together the movement on the screens, tracking the routes and destinations until the pattern becomes clear, and you realize that all the buses are feeding into a single point - the penguin enclosure - revealing exactly where the ritual is taking place.

Remove 1 doom`,
    bad: `You watch the screens and eventually begin to understand what is happening, but it takes too long as the patterns only become clear after repeated observation, and by the time you realize the penguin enclosure is the destination, the cultists have already advanced far into the next phase of their ritual.

Add 1 doom`,
    attached: [1, 2, 4],
  },
  {
    id: 4,
    name: 'The Sunken Ritual Site',
    introText: `Before continuing to read, choose 1 investigator per 10 doom. You cannot choose yourself.

You arrive at the penguin enclosure and, almost without thinking, you glance back over your shoulder, expecting to see all your friends following behind you as they had been just moments ago, but __names_of_chosesn_investigators__ are now missing, the crowd shifting and moving with no sign of them anywhere, and a quiet, immediate realization settles in that they are no longer with you.

Your attention is pulled forward.

The buses stand lined up along the edge of the enclosure, their engines idling softly, and one by one groups of guests are being led out in silence, each of them blindfolded and with their hands tied, guided by zoo-employees.

They walk as though they have already accepted what is about to happen.

You move closer, staying out of sight, and then you see them. Among the line of guests.Your friends... Blindfolded. Moving with the others.

Your breath catches, but your body refuses to move as you watch them reach the edge, guided forward step by step, until they are standing at the water's edge without hesitation.

One by one, they step in.

The water closes over them without resistance, without a ripple or a sound. Their shapes fading as they sink beneath the surface.

Challenge: Sneak into the water without being noticed: Agility 4`,
    good: `You time your movement perfectly, slipping unnoticed between the figures and into the dark, still water, and as it closes over you without resistance, your body is pulled downward until the world around you shifts and you are no longer in the enclosure at all.

Remove 1 doom`,
    bad: `You try to slip into the line, but one of the cultists turns just a fraction too early, their gaze locking onto you as the others immediately follow, their attention shifting, and although you manage to break free and throw yourself into the water, you know as it closes over you that they have seen you, that they are aware of your presence on the other side, and that whatever waits beyond the portal will not meet you unnoticed.

Your body is pulled downward until the world around you shifts and you are no longer in the enclosure at all.

Add 1 doom`,
    attached: [3, 5],
  },
  {
    id: 5,
    name: 'Drowned Saltmere Point',
    introText: `You break through the water. When your vision steadies you realize you are no longer in the enclosure at all, but standing in the middle of Saltmere Point.

Not as it was.

As it is now.

The town stretches out before you, submerged and silent, its streets filled with slow-moving water, familiar buildings reduced to hollow outlines. The sky above is dim and heavy. Figures drift in the distance.

The guests.

Blindfolded.

Unmoving.

You hear something.

The church.

It stands ahead, unchanged in shape but not in presence, its structure darker, heavier, as if it sits at the center of everything that is happening, anchoring this impossible version of Saltmere in place.

The doors are open.

You force yourself forward.

Inside, the space widens unnaturally, the interior far larger than it should be, the air-or whatever remains of it-thick and still as the ritual unfolds before you.

The cultists form a circle around the altar, their black robes drifting slightly in the water, their heads bowed as they chant in a low, steady rhythm that seems to echo from every surface at once. At the center of the circle, the fracture in reality is already open, a vast, shifting wound in the world from which something immense presses forward, its presence distorting everything around it.

Al'thaq the Unbound One.

A weight.

A presence.

Something that does not belong here-and yet is already becoming part of everything.

The guests you saw outside are here as well, their forms arranged around the space, blindfolded and unmoving, their presence feeding the ritual, holding it in place, anchoring whatever is coming through.

And among them-

Your friends.

At the edge of the circle.

Still.

Silent.

Waiting.

The ritual is already in motion.

And this time-

You are not early.

Challenge: Defeat Al'thaq the Breaching One

You must succeed at one of the following checks 6 times, each alive investigator must perform one check, rik must perform the other checks and as a team you must succeed at each type of check at least once.

The difficulty of each check is:

< 10 doom - 2
< 20 doom - 3
< 30 doom - 4
< 40 doom - 5


Willpower (Mind): You steady your thoughts against the crushing pressure of the deep, resisting Al'thaq's presence long enough to keep the ritual from collapsing inward.

Intellect (Investigation): You recognize the drowned patterns etched into the church floor and disrupt a key symbolic anchor, weakening the cult's hold on the breach.

Agility (Dexterity): You move swiftly through the rising water and shifting debris, dodging grasping forms beneath the surface to interrupt the cultists' positioning.

Combat (Strength): You force your way through the circle, striking down cultists and breaking their formation, scattering them before they can complete the final phase of the ritual

Checks needed:

< 8  Read resolution 1
< 12 Read resolution 2
< 17 Read resolution 3
>= 17 Read resolution 4
`,
    good: 'See resolutions',
    bad: 'See resolutions',
    attached: [4],
  },
];
