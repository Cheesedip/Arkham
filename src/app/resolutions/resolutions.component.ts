import { Component, computed, signal } from '@angular/core';

interface ResolutionEntry {
  id: number;
  title: string;
  text: string;
}

interface ResolutionButton {
  id: number;
  title: string;
  tone: 'good' | 'bad';
}

@Component({
  selector: 'app-resolutions',
  standalone: true,
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent {
  private readonly resolutions: ResolutionEntry[] = [
    {
      id: 1,
      title: 'Resolution 1',
      text: `The water presses in from every side as the drowned church trembles around you, its stone pillars groaning beneath the impossible weight of the deep, while the silhouettes of the sacrificed guests drift just beyond the shattered windows, suspended in the dark water, blindfolded, motionless. At the center of the ruined altar, Al'thaq the Unbound One forces itself further into the world, its vast form pushing through the fracture in reality, limbs forming and dissolving as if the world itself cannot decide how to contain it.

You do not hesitate.

With the final strength you have left, you take the hand of one of the remaining investigators, someone who has stood beside you through everything, someone who does not fully understand, but trusts you nonetheless, and together you step into the broken ritual space before the altar. Another of your companions, shaken but resolute, steps forward as well, instinctively taking on the role of officiant, as though the ritual itself demands someone to speak the words that must be spoken.

Their voice is unsteady at first, but something ancient settles over them, guiding them as they begin to speak, not from memory, but from somewhere deeper, older - words that belong to the ritual, not to any ceremony meant for joy. They name the union. They acknowledge its purpose. Their voice carries unnaturally far through the drowned space, echoing through the water and stone alike.

They look between you and your chosen partner, hesitation flickering for just a moment, before asking the question that now holds more weight than either of you could have imagined.

And you answer.

"Yes."

Your partner answers as well, their voice quieter, but just as certain.

At that moment, something shifts.

The ritual takes hold, the bond between you anchors the space, reshaping the fractured geometry of the church, pulling the world back into alignment.

Al'thaq recoils violently with a sudden pull, as though reality itself is rejecting its presence. The massive form collapses inward, its countless shapes folding into themselves as the fracture in reality seals shut with a deep, resonating sound that seems to come from everywhere at once.

The water stills and silence remains.

Beyond the church, the figures in the water begin to move.

The blindfolds slip away. Bodies that hung lifeless suddenly draw breath, their forms stabilizing as they are released from whatever held them in place. One by one, the sacrificed guests return. The flooded vision dissolves. The church is gone.

Saltmere Point returns as it always was, untouched, whole, impossibly ordinary.

And you -

You and the others stand there, alive, unharmed, the world quiet around you.

In the days that follow, everything slips gently back into place. Conversations feel familiar. Routines return. The strangeness fades quicker than it should, dissolving into the background of memory until there is nothing left to question.

Eventually, even the memory itself disappears.

You all forget.

Completely.

And yet -

Now and then, in quiet moments, something lingers. A dream. A sensation of pressure. The feeling of being watched from somewhere far below.

And sometimes, just before waking -

You still hear the faint echo of vows spoken in the dark, and something vast retreating into silence.`
    },
    {
      id: 2,
      title: 'Resolution 2',
      text: `The water presses in from every side as the drowned church trembles beneath the crushing weight of the deep, its stone pillars groaning and splintering while the silhouettes of the sacrificed guests drift beyond the shattered windows, suspended in the dark water, blindfolded and unmoving, as though already claimed by something vast and patient below. At the center of the altar, Al'thaq the Unbound One continues to force itself into the world, its form unstable and shifting, limbs forming and dissolving as reality strains to contain what was never meant to exist within it.

You step forward, knowing exactly what must be done, feeling the pull of the ritual as one of your companions moves into place to act as officiant, their voice ready to call the final words into existence, yet when the moment comes and all eyes turn to you, you cannot bring yourself to complete it, because this was never meant to happen like this, not without her, not without Elke.

You shake your head.

"No."

The ritual collapses in on itself, not failing entirely but unraveling just enough to break the fragile alignment holding everything together, and in that instant chaos erupts as the cultists lose control and the structure of the church begins to distort, its geometry twisting and folding as the breach destabilizes. You push forward through the confusion, ignoring the pull of the collapsing ritual as you reach your friends - your closest companions, those who had been taken and bound within the ritual itself - and with desperate effort you manage to pull them free, dragging them out of the center before the fracture can claim them completely.

They are saved.

But not everyone is.

Beyond you, farther out in the dark water, other figures remain where they are, their forms flickering and fading as the collapsing ritual strips away the last chance of their return, leaving them suspended, forgotten, as the breach begins to close.

Al'thaq recoils violently, not sealed, but forced back, its massive presence tearing away from the surface as the fracture folds inward and pushes it down once more, not gone, not contained forever, but driven back into its prison by the failure of the ritual to complete. The space shudders, then stills, the water settling as the pressure slowly lifts and the drowned church dissolves around you.

Saltmere Point returns.

Whole. Quiet. Untouched.

You and your friends stand there, shaken but alive, the air normal again, the world unchanged except for the silent understanding that some were not brought back with you.

In the days that follow, everything begins to settle into place as though nothing has happened, with conversations regaining their normal rhythm and routines returning with a strange, effortless ease, while the memory of what you experienced fades faster than it should, slipping away piece by piece until there is nothing left to question and nothing left to hold onto.

Eventually, even that is gone.

You all forget.

Almost completely.

Yet not everyone escapes unchanged, as one or two among you fail to fully return to themselves, something in their minds left open, unable to close what they witnessed beneath the surface, and they are quietly taken away, their condition spoken of only in hushed tones, their faces no longer seen among the rest.

And for those who remain, life simply continues.

But sometimes, in quiet moments, something lingers, a pressure behind the eyes, a memory just out of reach, a feeling of being watched from far below, and in the stillness before sleep, when the world feels just a little too quiet -

You wonder if it is truly over.`
    },
    {
      id: 3,
      title: 'Resolution 3',
      text: `The water presses in from every side as the drowned church shudders beneath the immense weight of the deep, its structure straining and splintering while the silhouettes of the sacrificed guests drift beyond the broken windows, blindfolded and unmoving, suspended in the dark water as if already claimed by something that no longer belongs to the surface world. At the center of the ruined altar, Al'thaq the Unbound One forces itself further into existence, its vast and unstable form pushing through the fracture in reality, its presence warping everything around it as though the world itself is bending under its arrival.

You step forward, fully aware of what must be done, feeling the pull of the ritual drawing you toward its completion, yet when the moment comes and the final act demands that you bind yourself in it, you refuse, because this was never meant to be this way, not without Elke, not without the one it was meant to be with, and no matter the cost you cannot force it into something it should not become.

The ritual falters.

Not enough to break completely - but enough to collapse.

Without the binding force of the marriage, the structure holding the two worlds apart destabilizes, and while the cultists' design is shattered in the chaos that follows, there is no counterbalance to restore what has been broken. The space bends and tears, the drowned church twisting as the fracture begins to close unevenly, forcing Al'thaq back but not sealing it, only delaying what was set in motion.

You try to reach them.

Your friends.

The ones who were taken.

But they and all of the other guests are already too far gone, their shapes suspended in the water beyond your reach, their forms flickering and fading as the collapsing ritual strips away the last chance of their return, leaving nothing behind but empty outlines as the deep reclaims what was offered to it.

There is nothing you can do.

Al'thaq recoils, its immense form dragged backward as the unstable fracture seals just enough to force it down again, but not enough to bind it, not enough to secure the prison in any lasting way, leaving only the knowledge that what was stopped here will not stay stopped forever.

The water stills and the church fades.

Saltmere Point returns.

Untouched. Ordinary. Whole in every visible way.

But when you and the others stand there, breathing again in a world that pretends nothing ever happened, the silence between you carries something far heavier than relief, because you know what was lost, even if you cannot yet fully grasp it.

In the days that follow, the memory begins to slip, fading faster than it should as the mind rejects what it cannot comfortably hold, smoothing over the edges until the events become distant, fragmented, and eventually unreachable.

Yet forgetting does not bring peace.

The remaining investigators do not return to who they were, their sleep broken by shapes and pressure and the constant sense of something waiting just beyond sight.

Life continues, but it never feels entirely real again.

Conversations lose their meaning. Familiar places feel distant. Time moves forward, but something inside remains fixed in that moment beneath the water.

You go on.

All of you do.

But none of you ever truly leave Saltmere Point.`
    },
    {
      id: 4,
      title: 'Resolution 4',
      text: `The drowned church stands silent as the ritual reaches its final moment, with a quiet, irreversible completion that settles over everything at once, and within that stillness Al'thaq the Unbound One fully manifests.

The figures of the sacrificed guests drift through the water, blindfolded and unmoving, their forms no longer fading or shifting, but fixed and steady as part of this world. You wait for something to change.

But nothing does.

There is no return.

You and the remaining investigators begin to move through the submerged streets of Saltmere Point, passing familiar buildings now hollow and silent, their shapes softened and distorted by the water, yet unmistakably the same place you once knew, preserved in this unnatural stillness.

Sound carries strangely, distant and muted, as if the world itself resists clarity, and every movement feels slower, heavier, bound by the quiet pressure that surrounds you on all sides.

Time does not move forward in any meaningful way.

There is no sense of progression, no rhythm of day or night, only the steady continuation of being here, aware of what has happened and unable to escape it, with the memory of the surface world lingering just enough to make the difference impossible to ignore.

Al'thaq's presence fills everything, subtle but inescapable, felt in the weight of the water, in the stillness of the buildings, in the empty distance between places.

You walk.

You rest.

You wake.

And you are still here.

The same streets, the same drifting figures, the same silent expanse stretching endlessly in every direction.

There is no path out.

No edge to reach.

No moment where anything changes.

Only Saltmere Point beneath the water -

and the quiet certainty that this, now and always, is the world.`
    }
  ];

  readonly resolutionButtons: ResolutionButton[] = [
    { id: 1, title: 'Resolution 1', tone: 'good' },
    { id: 2, title: 'Resolution 2', tone: 'good' },
    { id: 3, title: 'Resolution 3', tone: 'bad' },
    { id: 4, title: 'Resolution 4', tone: 'bad' }
  ];

  readonly selectedResolutionId = signal<number>(1);

  readonly selectedResolution = computed(() =>
    this.resolutions.find(resolution => resolution.id === this.selectedResolutionId())
  );

  showResolution(id: number): void {
    this.selectedResolutionId.set(id);
  }
}
