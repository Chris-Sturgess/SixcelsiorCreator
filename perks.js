const PERKS = [{
	name : 'Anarch-er-y',
	cost : '(1)',
	description: 'Once per Session you can let loose with a barrage of arrows attacking anyone within range. Each target creates a -1 penalty to hit. Rolls to hit and damage are made only once and applied simultaneously to all targets. You must have at least 6D in Archaic Missiles/Bow and have the Instant Reload Perk. With GM permission, this Perk may be used for other Archaic Missiles or Thrown attacks.'
},{
	name : 'Ballistic Ballet',
	cost : '(1)',
	description: 'You are the Baryshnikov of Kalashnikovs. For you, gunplay is an art form. Once per Session, while using a modern firearm, on a single Action you can hit as many different targets in one Round as you wish, each target adding a -1 penalty to hit with all shots in the Ballet. You roll to hit and damage only once for all targets. Requires at least 6D Skill in the weapon you\'re using as well as the Instant Reload Perk.'
},{
	name : 'Bend It',
	cost : '(1)',
	description: 'Lets you curve the trajectory of one of your ranged attacks once per Scene, ignoring cover modifiers due to interposing obstacles and reducing static defenses against the attack by half.'
},{
	name : 'Berserk',
	cost : '(1)',
	description: 'Once per Session, after receiving an Injury (or with sufficient provocation, GMs discretion), you may add +1D to Might, increasing both your basic damage and Soak, but your static defenses are halved. This lasts for 1D+1 Rounds. If no opponents are left after that, you start attacking allies and nearby objects (treat as a Complication).'
},{
	name : 'Blind Fight',
	cost : '(1)',
	description: 'Lets you fight stuff you can\'t see. Whether or not you can see an opponent, if they are engaged with you (actively attacking you), you may attack without penalty from darkness, invisibility, sensory block and so on. If they are not engaged with you, you must spend an Action using your other senses to find them, however a Perception Skill roll is not required. For Brawl or Melee attacks only.'
},{
	name : 'Blind Shot',
	cost : '(1)',
	description: 'Lets you hit stuff you can\'t see. If you can reasonably sense the target in some way (hear, smell, feel air currents) you can ignore penalties from blindness, obscurity or sensory blockade. You must spend an Action to use your other senses, but no Perception Skill roll is required. Used only for ranged attacks.'
},{
	name : 'Boomerang-able',
	cost : '(1)',
	description: 'A single item you use as a projectile comes back to you (requires no Action on your part). For someone else to catch it they must match your Skill roll with their own Athletics. You lose the Perk if the item is destroyed. Each item is considered its own Perk.'
},{
	name : 'Cinematic Shot',
	cost : '(1)',
	description: 'Once per Session, after leaping, dodging, rolling or something equally physically dynamic, you may double the Skill dice of your next attack roll if it immediately follows your cinematic move, unaffected by Action penalties.'
},{
	name : 'Counterattack',
	cost : '(1)',
	description: 'Whenever some opponent hits you in Brawl or Melee combat, you capitalize on the opening they leave you. After receiving a hit, once per Round, you may attack your opponent without expending an Action. You need at least 4D Skill in your Brawl or Melee Counterattack.'
},{
	name : 'Daredevil',
	cost : '(2)',
	description: 'Once per Session you may throw caution to the wind taking extremely reckless action that may result in your own death. Your dodge, block, and parry are reduced by half however your Might Attribute is doubled when resisting damage for one Round.'
},{
	name : 'Deadshot',
	cost : '(2)',
	description: 'Once per Session you can double the dice on any ranged attack Skill roll. All your ranged attacks add +1 to damage.'
},{
	name : 'Dirty Fighter',
	cost : '(1)',
	description: 'Once per Scene you can double the Skill dice of a single attack, representing some low-down dirty trick which you must describe to GM satisfaction to benefit from this Perk.'
},{
	name : 'Double-Tap',
	cost : '(1)',
	description: 'You have trained to reflexively fire twice to ensure the highest chance of a kill. You may fire two shots at the same target as a single Action. This applies to semi and fully automatic firearms only.'
},{
	name : 'Drawcut',
	cost : '(1)',
	description: 'Once per Round, any successful Brawl or Melee attack, using piercing or slashing weapons, allows you to roll damage twice and apply each separately against the same target\'s Soak, as you drag your weapon through your opponent while you withdraw it. A Drawcut counts as one Action. Requires at least 5D Skill in the attack.'
},{
	name : 'Draw-and-Fire',
	cost : '(1)',
	description: 'You can draw your weapon and fire (or Throw) instantly, without requiring an Action. Only works with ranged attacks. Requires Quick Draw.'
},{
	name : 'Draw-and-Strike',
	cost : '(1)',
	description: 'You can draw your weapon and strike instantly, without requiring an Action. Only works with melee attacks. Requires Quick Draw.'
},{
	name : 'Fatal Strike',
	cost : '(1)',
	description: 'Once per Session, double any damage exceeding your target\'s Soak.'
},{
	name : 'Frenzy',
	cost : '(1)',
	description: 'Once per Session, after receiving even a Stun (or with sufficient provocation, GMs call), you fly into a kinetic storm of activity, allowing you to add one extra Action per Round and ignore all Action penalties. This lasts for 1D+1 Rounds. Any Complication means you\'ve hit the closest ally, if there are none around, you hit yourself.'
},{
	name : 'Hammer Fan',
	cost : '(1)',
	description: 'Used with revolvers only; your hand repeatedly draws back the pistol\'s hammer achieving an astonishing rate of fire as a single Action. Your revolver becomes, in effect, a submachine gun. You may fire as many shots in one Action as you wish, up to the number of bullets in the gun, each shot adding +1 to both attack Skill roll and damage. These rolls are made only once for each burst of fire, not separately for each bullet. Thus, fanning the hammer and shooting three rounds adds +3 to both attack and damage rolls, but only one roll is made for all three bullets together, not for each one. When firing on multiple targets you can either subtract the number of targets beyond the first one from the bonus, or you can decide how many bullets you are aiming at each target and add the appropriate bonus. You may not hit more targets then the number of bullets you\'re shooting.'
},{
	name : 'Heavy Hitter',
	cost : '(1)',
	description: 'You punch above your weight class. Add +1 to Brawl and Melee damage.'
},{
	name : 'Instant Reload',
	cost : '(1)',
	description: 'You can chamber a bullet, knock an arrow or load a clip without using an Action.'
},{
	name : 'Instant Stand',
	cost : '(1)',
	description: 'Whenever knocked prone, you can get up without using an Action.'
},{
	name : 'Instant Stand-and-Strike',
	cost : '(1)',
	description: 'If prone, you may stand up and attack once, without using an Action. Requires Instant Stand Perk.'
},{
	name : 'Just the Flat',
	cost : '(1)',
	description: 'You can render any injury you receive of a slicey or stabby nature into Knockout damage, once per Session.'
},{
	name : 'Kata',
	cost : '(1)',
	description: 'Through intense practice and repetition, you combine multiple attacks into a single Action. For each attack in the Kata beyond the first, a -1 pip Skill penalty is applied. You may have as many attacks in the Kata as D in Moves Attribute. The attack is rolled once, using the lowest Skill roll involved in the Kata, the result is applied to every attack simultaneously. The Kata counts as only a single Action for determining multiple Action penalties. Your Katas can only involve attacks with Skill of 4D or greater. Each Kata is a separate Perk that must be purchased individually. The number and type of moves within each Kata must be declared at purchase. Requires Martial Art Perk.'
},{
	name : 'Know Your Enemy',
	cost : '(1)',
	description: 'Each Round you spend studying a single opponent in combat, you may reduce their static defenses against you by half, or double your own, for an equal number of Rounds. You may not perform any other Action during your study period, as you analyze your opponent\'s weaknesses, although you may go “full defense” during that time, adding 10 to your static defenses (see Combat). This benefit lasts for a maximum of a Scene and applies to remote viewing such as closed-circuit TV or Far-Sensing.'
},{
	name : 'Lethal Line-Up',
	cost : '(1)',
	description: 'Once per Session you can divide the damage roll of a single attack among as many opponents as you wish, provided they are all directly in the line of your attack. This represents attacks that go through one target and hits another behind them, or beside them or nearby.'
},{
	name : 'Marksman',
	cost : '(2)',
	description: 'If allowed to prep for at least one Round before making the shot, double the Skill dice on any ranged attack Skill.'
},{
	name : 'Martial Art',
	cost : '(1+)',
	description: `You\'ve studied a martial art intensely, which must be specified at purchase (see list below) and have achieved a special degree of proficiency. Once per Session you can double the dice of any Skill deemed appropriate to your chosen Martial Art, or, use for a Scene any Perk or Powerk of equivalent Power Point value as your Martial Art. Some suggestions are listed below. This Perk may be taken multiple times representing expertise in that style. Each Amp allows another use per Session. This Perk represents an understanding beyond what might be represented by your character\'s Skill D-code.
		For the martial artists out there, the following descriptions may seem grossly oversimplified, but it was necessary to distil the relative merits into simple game terms. Feel free to add and subtract as you see fit. 
		Aikido/Hapkido/Judo/Jiu-Jitsu/Pankration: Grapple or Dodge, or Breakfall Perk.
		Boxing/Karate/Kung Fu/Muay Thai/Tae-Kwon Do: Strike, Block, or Dodge or Roll with It Perk.
		Budo: Sword (Katana or Wakizashi), Staff (bo or jo), Knife (tanto) or Grapple when using any of these weapons.
		Capoiera: Strike, Dodge or Athletics/Acrobatics.
		Escrima: Club, Knife, or Grapple.
		European Fencing: Melee (sabre, rapier, foil, dagger or epee), Grapple (when using any of these weapons) or Parry (against Melee attacks only).
		Krav Maga: Strike, Grapple or Dodge.
		Ninjutsu: Sword (ninjato), Strike, Throw Shuriken, Athletics/Acrobatics or Climb, or Stealth. 
		Savate: Block, Strike, cane-sword (sword or club).
		The above list is not exhaustive, if you don\'t see a Martial Art you like, feel free to build your own. Each Martial Art is considered its own Perk and must be purchased separately. You must have at least 4D in the relevant combat Skill.`,
	limit: ['Moves', 'Mojo'],
},{
	name : 'Melee Block',
	cost : '(1)',
	description: 'Ignore the penalty against Blocking Melee weapons. Brawl Skill must be at least 5D.'
},{
	name : 'Mighty Blow',
	cost : '(1)',
	description: 'Once per Session, you may add +2D damage to any Melee or Brawl attack. You may wait to see if you hit before adding the damage bonus.'
},{
	name : 'Musashi',
	cost : '(1)',
	description: 'You fight with two weapons simultaneously, the other weapon getting an attack (or Specialized Parry) each Round without expending an Action. The two-weapon combo must be specified and purchased as a separate Perk. Common examples include katana and wakizashi, rapier and main gauche, spear and shield, cutlass and pistol, two pistols and so on. You ignore the offhand penalty (-1D) for your Musashi weapon. Your Skill with each weapon must be at least 5D.'
},{
	name : 'Power-Block',
	cost : '(1)',
	description: 'Whenever you\'ve successfully Blocked an attack, once per Round, apply your Brawl damage to the Blocked object/person.'
},{
	name : 'Power-Parry',
	cost : '(1)',
	description: 'Whenever you successfully Parry an attack, once per Round, apply your damage against the Parried object/person as if you\'d successfully hit it.'
},{
	name : 'Projectile Block',
	cost : '(1)',
	description: 'You ignore the penalty against Blocking solid ranged attacks. You must have Melee Block, and your Brawl Skill must be at least 5D. Assumes a solid projectile, it\'s GM discretion whether you can Block non-solid projectiles like Energy Blasts and such.'
},{
	name : 'Projectile Catch',
	cost : '(1)',
	description: 'You can catch any solid projectile attack that has been successfully Blocked, or, by beating the attacker\'s Skill roll with your Athletics. Limited to the number of projectiles each Round equal to your D in Brawl or Athletics. You must have the Projectile Block Perk.'
},{
	name : 'Projectile Deflect',
	cost : '(1)',
	description: 'You may redirect a successfully Blocked or Parried projectile against any target, using the attacking Skill roll to hit. It\'s GM discretion as to whether you\'re able to deflect non-solid projectiles. You are limited to the number of projectiles each Round equal to D in Brawl or Melee Skill. Requires either of Projectile Block or Projectile Parry Perks.'
},{
	name : 'Projectile Parry',
	cost : '(1)',
	description: 'You can Parry ranged attacks without penalty. You must have at least 5D in Melee Skill. Assumes a solid projectile, it\'s GM discretion whether you can Block non-solid projectiles like frikkin\' lasers and such.'
},{
	name : 'Prone Fighter',
	cost : '(1)',
	description: 'You are not penalized when fighting prone, nor does your opponent get a bonus to hit you (see Other Conditions; Prone).'
},{
	name : 'Quick Draw',
	cost : '(1)',
	description: 'Drawing your weapon, or drawing anything else, doesn\'t require an Action.'
},{
	name : 'Rapid Strike',
	cost : '(1)',
	description: 'You can increase your Initiative by sacrificing your accuracy. Every point you add to your Initiative, you add to the TN of every Skill roll for Actions in that Round. Thus adding 10 to your Initiative would increase your attack TN by 10 (or subtract 10 from your rolls) as well as any other Skill rolls you perform that Round.'
},{
	name : 'Reversal',
	cost : '(1)',
	description: 'When resisting Grapple or a restraining Maneuver, Success is treated as a successful Grapple attack of your own against your opponent, without counting as an additional Action.'
},{
	name : 'Riposte',
	cost : '(1)',
	description: 'Whenever you\'ve successfully blocked or parried an Attack in close combat (Brawl or Melee), you may attack your opponent, without using an Action, once per Round. You must have at least 5D Skill with the Riposting attack.'
},{
	name : 'Ricochet',
	cost : '(1)',
	description: 'Once per Round, you may bank a shot with a missile attack off nearby surfaces to negate an opponent\'s cover and reduce any of their static defenses by half. Doesn\'t work if there are no nearby surfaces to bounce off. Damage of a Ricochet attack is reduced by 1D.'
},{
	name : 'Roll with It',
	cost : '(1)',
	description: 'Once per Session, you may opt to reduce the damage you receive by half or convert it to Knock-Out as you “roll with it”.'
},{
	name : 'Shake It Off',
	cost : '(1)',
	description: 'Once per Session, you can take a dedicated Round to “shrug off” an injury, but not Death. This has the effect of reducing your injury level by one step.'
},{
	name : 'Shattering Strike',
	cost : '(1+)',
	description: 'Once per Scene, against inanimate objects, you may double your damage dice.'
},{
	name : 'Shick-Shick!',
	cost : '(1)',
	description: 'Once per Scene, by chambering a round in any firearm, or pumping a shotgun, with dramatic authority (as an Action), you increase the damage of the next shot by +2D (because guns work that way. Really).'
},{
	name : 'Slippery Fighter',
	cost : '(1)',
	description: 'Once per Scene double the Skill dice of any roll against a Grapple or Immobilizing attack.'
},{
	name : 'The Bigger They Come',
	cost : '(1)',
	description: 'You may add +1 damage per D of Size-scale larger your target is than you. You may also double the Skill dice of one attack roll per Session against bigger targets. Nobody calls you shorty.'
},{
	name : 'The World My Arsenal',
	cost : '(2)',
	description: 'Once per Scene you can double the Skill dice of the attack roll of any non-weapon object used as an improvised weapon. Once per Session you can conveniently “find” such an object if one isn\'t readily available.'
},{
	name : 'Trademark Weapon',
	cost : '(1)',
	description: 'Once per Scene you can double the Skill dice of the attack roll on one specific type of weapon, not a Specialization, but a specific version of a Specialization. For example, a Walther PPK not a pistol, or a Turanian Battle Cleaver, not a battle-axe, “my great ancestor\'s sword” and so on.'
},{
	name : 'Weapon Catch',
	cost : '(1)',
	description: 'Once per Round, on a successful Parry or Block, you can trap a Melee weapon. Your opponent must use an Action to break free, by overcoming your Block with either their attack Skill or Might. Your Skill with either Brawl or Melee, if using either Block or Parry respectively, must be at least 5D.'
},{
	name : 'Whew! Close One',
	cost : '(1)',
	description: 'Once per Session, an opponent\'s first attack on you will miss regardless of what they rolled.'
},{
	name : 'Whirlwind of Whoop-Ass',
	cost : '(1)',
	description: 'Once per Session, you can attack as many opponents as you want within your strike range, as a single Action. Each attack applies a cumulative -1 penalty to all attack Skill rolls that Action. Your attack and damage rolls are made only once and applied to all opponents, using the lowest Skill in the Whirlwind. Applies only to Brawling or Melee combat. Requires at least 5D in your attacking Skill.'
},{
	name : 'Alertness',
	cost : '(1)',
	description: 'You may double the D of any Perception Skills, once per Session. You never roll Perception checks passively (see Perception Skill).',
},{
	name : 'Autodidact',
	cost : '(1)',
	description: 'You can rapidly absorb information. Given access to a database or material on a subject for one Round, once per Session, you may double the D on a pertinent Mind roll.'
},{
	name : 'Born to The Saddle/Wheel/Stick/Console',
	cost : '(1)',
	description : 'You have a talent for Riding/Driving/Pilot or some other mode of transportation. Once per Session double the D of any roll pertaining to that Skill. Each Skill is considered its own “Born To…” Perk.',
},{
	name : 'Brave',
	cost : '(1)',
	description: 'Double the D of any roll to overcome fear once per Session.'
},{
	name : 'Chutzpah',
	cost : '(1)',
	description: 'You have ridiculous amounts of nerve. Double the dice of any Skill roll performed under extreme risk or duress, once per Session.'
},{
	name : 'Conviction',
	cost : '(1)',
	description: 'You have a deeply held set of beliefs; a moral code, ethics, creed or religion. Double the dice of any roll to resist being influenced or compelled to violate that Conviction, once per Session.'
},{
	name : 'Cunning Linguist',
	cost : '(1)',
	description: 'Double the Mind Attribute dice for your Languages Skill.'
},{
	name : 'Dangersense',
	cost : '(1+)',
	description: 'Once per Session you can negate a single Surprised condition, or you can double the dice of an Intuition or Perception roll to detect danger, if no danger is present then the Perk has not been used.'
},{
	name : 'Demolition Expert',
	cost : '(1)',
	description: 'You are good at blowing stuff up. Once per Session double the dice on any Skills required to do that.'
},{
	name : 'Determined',
	cost : '(1)',
	description: 'Once per Session you can declare a goal or purpose. You can then double the dice of any single roll that pertains to succeeding in that goal.'
},{
	name : 'Direction Sense',
	cost : '(1)',
	description: 'No matter where you are (underground, at sea, in the trunk of a Cadillac) you know which direction you\'re facing. Double the dice of any roll to navigate yourself or find your way around.'
},{
	name : 'Faith',
	cost : '(1)',
	description: 'Your religious beliefs allow you to resist temptation or fear stemming from forces inimical to those beliefs. Twice per Session double the dice of a Will roll against such influences. Your Faith also acts as an Obligation (like the Complication) to follow the tenets of that Faith.'
},{
	name : 'Gadgeteer',
	cost : '(1)',
	description: 'Once per Session double the dice of any roll required to invent or jury-rig a device.'
},{
	name : 'Genius',
	cost : '(3/Amp)', 
	description : 'You have an unnatural gift for a specific Skill. Raise the usual upper D-code limit for this Skill by 1D (usually it\'s double the parent Attribute D).',
	limit : ['Mind', 'Mojo']
},{
	name : 'Hacker',
	cost : '(1)',
	description: 'You\'re good at bypassing computer/electronic security, double the dice of any Tech rolls required to do so, once per Session per Amp.'
},{
	name : 'Handy',
	cost : '(1)',
	description: 'You\'re good at fixing things. Once per Session double the dice of any roll required to repair an object.'
},{
	name : 'Healing Hands',
	cost : '(1)',
	description: 'You are a gifted healer. Double the dice of any rolls you make at assisted healing, once per Session.'
},{
	name : 'Impersonator',
	cost : '(1)',
	description: 'You have a knack for mimicking others. Once per Session, double the dice of any roll to Disguise, Perform or to Persuade someone that you\'re someone (or something) else.'
},{
	name : 'Investigator',
	cost : '(1)',
	description: 'You have a knack for uncovering the truth. Once per Session double the dice of any roll that helps you do that.'
},{
	name : 'Jack-of-all-Trades',
	cost : '(1)',
	description: 'Once per Session you can double the dice of any Skill roll that you haven\'t spent any Power Points or Character Points on yet.'
},{
	name : 'Level-Headed',
	cost : '(1)',
	description: 'You keep your cool when others normally lose theirs. Double the dice of any Will roll against fear, confusion or emotional turmoil, once per Session.'
},{
	name : 'Logical Thinker',
	cost : '(1)',
	description: 'You\'re good at solving problems in a systematic, deductive fashion. Once per Session double the dice of any rolls that might benefit from this.'
},{
	name : 'Mastermind',
	cost : '(1)',
	description: 'Once per Session, when acting as the leader or organizer of a plan, you may use your Influence and any other appropriate Skills or Specialties as a Support pool for all members of your team in the execution of your plan. The Support bonus ends with the Session, or the resolution of that plan, whichever comes first.'
},{
	name : 'Math Whiz',
	cost : '(1)',
	description: 'Theoretical mathematics is your idea of a good time. You don\'t need a calculator, you are one. Double the dice of any rolls that would benefit from mathematical analysis, once per Session.'
},{
	name : 'Nobody\'s Fool',
	cost: '(1)',
	description : 'You\'re not easily manipulated. Once per Session, double the dice of any roll to overcome deception or harmful influence from either mundane or super/supernatural sources.'
},{
	name : 'Perceptive',
	cost : '(2)',
	description: 'The GM may reveal small clues to you that others would miss. Once per Session a character may announce they are studying an object or situation and the GM may reveal something that would be impossible for a normal character to determine. If nothing is revealed this Perk may be used again. “Elementary, my dear Watson.”'
},{
	name : 'Perfect Pitch',
	cost : '(1)',
	description: 'Once per Session double the dice of any Performance rolls dealing with music, or voice.'
},{
	name : 'Perspicacity',
	cost : '(1)',
	description: 'Once per Session double the dice of any roll to see if you notice something.'
},{
	name : 'Quick Study',
	cost : '(1)',
	description: 'You learn quickly under pressure, but this knowledge degrades quickly over time. You may add +1D to any Skill you\'ve had the opportunity to observe in action. This bonus lasts for one Scene and may only be used once per Session.'
},{
	name : 'Recall',
	cost : '(1)',
	description: 'Any time the character chooses to recall anything they have experienced, the GM must tell them the truth in as much detail as the character would have been aware.'
},{
	name : 'Savant',
	cost : '(1+)',
	description: 'For a single Specialization, raise the potential D-code upper limit by 1D.',
	limit : ['Mind', 'Mojo'],
},{
	name : 'Scavenger',
	cost : '(1)',
	description: 'Other people\'s junk is your treasure. Double the dice of any rolls used to find useful stuff in unlikely places, once per Session. This might include tools, weapons, information, food, water, shelter etc.'
},{
	name : 'Scholar',
	cost : '(1)',
	description: 'You spend a lot of time studying for one thing or another. Once per Session double the dice of any Arcana, Knowledge, Law, Medicine or Science roll.'
},{
	name : 'Universal Translator',
	cost : '(3)',
	description: 'You can understand and speak every language that you are biologically able to use after a single Scene dedicated to learning it. Double your number of fluent starting language slots. Double any roll to understand codes and cryptography.'
},{
	name : 'Well Read',
	cost : '(1)',
	description: 'Double the dice of any Mind-based Skill roll once per Session, because of something interesting that you\'ve recently read…'

},{
	name : 'Acute Hearing',
	cost : '(1)',
	description: 'Double the Attribute D of your Perception/Listen Specialization, even beyond your Skill/Attribute limits. Halve your resistance to any sound or sonic based attacks, you may treat that aspect as a Complication.'
},{
	name : 'Acute Vision',
	cost : '(1)',
	description: 'Double the Attribute D of your Perception/Search Specialization, even beyond your Skill/Attribute limits. Halve your resistance to any light or visual attacks, treat that aspect as a Complication.'
},{
	name : 'Ambidextrous',
	cost : '(1)',
	description: 'Equally dexterous with both left and right, you ignore any penalties (usually -1D) for Actions taken with your off-hand(s). This doesn\'t create extra Actions or negate Action penalties.'
},{
	name : 'Big',
	cost : '(1)',
	description: 'You are larger than average, but not so large that you need Mighty Scale (see Powerks below). Your Size is not smaller than 8. Add +1 or +2 pips (your choice) to your Soak and Brawl/Melee damage but subtract a corresponding 1 or 2 pips from your static defenses, Stealth and Athletics. Once per Session you can double any Skill roll that might benefit from your bigness (Intimidation comes to mind here). Treat this as a Complication under certain circumstances (just can\'t fit through that escape hatch for example).'
},{
	name : 'Eagle-Eyed',
	cost : '(2)',
	description: 'Double the dice of any Perception check to look at something in the distance, also, all range penalties are reduced by 5.'
},{
	name : 'Explosive Speed',
	cost : '(1)',
	description: 'Your sprint Velocity upscales by one in the first Round of a sprint.'
},{
	name : 'Fast Healer',
	cost : '(1)',
	description: 'Once per Session double the dice of any natural or assisted healing roll upon you.'
},{
	name : 'Fine Manipulation',
	cost : '(1)',
	description: 'You\'re good with your fingers and tasks that require fine motor skills. Double the Skill dice of your roll once per Session for tasks that require this (picking locks, making watches, disarming booby-traps, neurosurgery etc.).'
},{
	name : 'Fleet-Footed',
	cost : '(1)',
	description: 'Once per Session, double the dice of any Athletics/Running roll.'
},{
	name : 'Flexible',
	cost : '(1)',
	description: 'You\'re double-jointed or can bend in ways that make people lose their lunch (or want to date you). Once per Session double the Skill dice of any roll where this might be helpful (Climb, Dodge, Grapple, Escape Artist, Seduction etc.).'
},{
	name : 'Gymnast',
	cost : '(1)',
	description: 'Because of your special training you can double the dice of any “gymnastic” type roll once per Session. This might include certain Athletics checks (Acrobatics, Jump), Dodge and so on.'
},{
	name : 'Hard to Kill',
	cost : '(1)',
	description: 'Once per Session, automatically succeed at a survival roll if Mortally Wounded, or reduce a Death result by one step to Mortally Wounded.'
},{
	name : 'High Pain Tolerance',
	cost : '(1)',
	description: 'Double the dice of any roll made to resist the effects of pain.'
},{
	name : 'Iron Grip',
	cost : '(1)',
	description: 'Once per Session double the dice of any roll where having a powerful grip is an asset (Climbing, Grappling, Intimidating handshake etc.).'
},{
	name : 'Lantern Jawed',
	cost : '(1)',
	description: 'Once per Session you may double the dice any roll to resist Knock-Out or loss of consciousness.'
},{
	name : 'Lightning Reflexes',
	cost : '(2)',
	description: 'Add +1D to your Initiative. Once per Session double one of your static defenses or any roll involving a test of reaction speed.'
},{
	name : 'Nimble',
	cost : '(1)',
	description: 'Once per Session you may double the dice of either a Dodge or Athletics roll.'
},{
	name : 'Small',
	cost : '(1)',
	description: 'You\'re smaller than average, but not so small that you need a Scale modifier. Your Size will never be greater than 4. Add +2 to your static defenses, as well as Stealth and Athletics but subtract one from hand to hand damage. Once per Session you may double the Skill dice of one roll that would benefit from your smallness. You may treat this as a Complication under the right circumstances.'
},{
	name : 'Steady Hands',
	cost : '(1)',
	description: 'You coulda been a surgeon. Maybe you are. Once per Session double the Skill dice of any rolls where a steady hand is an asset (shooting from a moving platform, disarming a bomb, picking pockets, playing Jenga etc.).'
},{
	name : 'Tough',
	cost : '(2)',
	description: 'Ignore the -1D penalty when Stunned. Once per Session double the dice of either a Stamina or Will roll because you\'re so damn Tough.'
},{
	name : 'Tougher',
	cost : '(1)',
	description: 'Ignore the -1D penalty when Wounded. Once per Session double the dice of either a Stamina or Will roll because you\'re so damn Tougher. Must have the Perk “Tough”.'
},{
	name : 'Tougherer',
	cost : '(1)',
	description: 'Ignore the -2D penalty when Severely Wounded. Once per Session double the dice of one Stamina or Will roll. Must already possess Tough and Tougher Perks.'

},{
	name : 'Alias',
	cost : '(1+)',
	description: 'You have a hardcore fake identity with documentation, web presence, maybe even some people paid in advance to pretend to know “you”. Anyone investigating your Alias encounters a TN of 25 to see through it. You don\'t need to decide in advance what your new identity is, only that it\'s there when you need it. Each Amp either permits another identity, or adds +5 against your discovery TN. Your discovery TN can be Supported by any GM approved D-codes you can access (eg. Crime, Espionage, Resources and so on).'
},{
	name : 'Aristocrat',
	cost : '(1+)',
	description: 'Your name has some weight on occasion. When attempting to gain access to a noble\'s residence, avoiding arrest, or any other occasion where status is a factor you can try and draw on your family. Once per Session you can double the D of any Influence roll when attempting to exploit your name. This may also have its own consequences such as mandatory social engagements, resentment from the lower classes etc. Treat these as Complications when they become problematic. Start with an additional +1D to your Resources, but only with the first Amp.',
	limit : ['Mojo'],
},{
	name : 'Attractive',
	cost : '(1+)',
	description: 'Others find you pleasing to look at. This can help reduce suspicions or distract others depending on the given situation. Once per Session you can double the D of one Skill roll for any action related to your appearance. Examples include seduction, a subtle bluff or simply distracting guards. Add +1 to your Resources.',
	limit : 'Mojo',
},{
	name : 'Authority',
	cost : '(1)',
	description: 'You are a bigshot, in charge of something, and most people around you acknowledge this. When dealing with your sphere of control, double the D of any Influence rolls, twice per Session.'
},{
	name : 'Celebrity',
	cost : '(1)',
	description: 'You are one of the well-known, in-crowd. You could be a media personality, Nobel prize winner, famous astronaut, whatever. Everywhere you go people recognize you and will likely admit you to their dance club, social event or just assume you are on the VIP list. Double an Influence roll once per Session to model this. Unfortunately, being well-known can also have its drawbacks, which you may treat as a Complication. Add +1D to your Resources.'
},{
	name : 'Charismatic',
	cost : '(1+)',
	description: 'You have a way with people. Once per Session, double the dice of any Influence roll. Add +1 to your Resources.',
	limit : 'Mojo'
},{
	name : 'Favors',
	cost : '(1+)',
	description: 'People owe you. Once per Session you can call in one of those debts. This can take the form of information, a temporary use of equipment (borrowing a truck, plow, pump action shotgun, etc.), a place to hide someone or something for a brief time, or any similar event.'
},{
	name : 'Fearsome Countenance',
	cost : '(1+)',
	description: 'You have a mean look. Once per Session double the dice of any Influence roll that might benefit from looking scary.'
},{
	name : 'Friends in High Places',
	cost : '(1+)',
	description: 'You have connections to high society (Kings, CEOs, Uber-AIs, whatever that may mean in your world), movers and shakers, people of influence. Once per Session double the Skill dice on any roll that might benefit from being thus connected.'
},{
	name : 'Friends in Low Places',
	cost : '(1+)',
	description: 'You have connections to low society (criminals, beggars, ne\'er-do-wells, roleplaying gamers). Once per Session, double the dice of any roll that may reasonably benefit from such connections.'
},{
	name : 'Funny',
	cost : '(1)',
	description: 'People like you because you make them laugh. Once per Session double the dice of an Influence roll by using a witty quip, bon mot or withering remark. Gain a Character Point if it makes the GM laugh.'
},{
	name : 'Inspire',
	cost : '(1)',
	description: 'Once per Session, using either Performance or Influence rolls, you can create a Support pool useable by your audience towards furthering the cause to which you are rallying them. Roll your Skill and any other appropriate Support pool. This Support vanishes when the cause is resolved or the end of the Session, whichever comes first.'
},{
	name : 'Legal Authority',
	cost : '(1)',
	description: 'You have the permission of your society at large to investigate crime and apprehend and possibly prosecute/punish offenders (according to your legal tradition). You might be police, federal, military, a lawyer or deputized somehow. Twice per Session you can double the Skill dice of any roll when interacting with law enforcement apparatus or to make Influence rolls where your Legal Authority would be an advantage. Legal Authority also acts as an Obligation Complication if there are certain procedural or ethical guidelines you must follow as a member of the law enforcement community.'
},{
	name : 'Natural Leader',
	cost : '(1+)',
	description: 'You were born to lead. Once per Session double the dice of any Influence roll against those you seek to lead.',
	limit: 'Mojo',
},{
	name : 'Nobility',
	cost : '(1+)',
	description: 'You are part of the ruling class within a society that recognizes such authority (a kingdom, an empire, a hive etc.). As such, you may command your subjects, and double the D on any rolls to Influence them. Those above you in the society\'s social strata may command you in turn and may expect oaths of loyalty and obedience.'
},{
	name : 'Meditation',
	cost : '(1)',
	description: 'Once per Session whenever you take a Scene to contemplate a problem, you may use your Will/Self-Control as a Support for any rolls made towards resolving that issue, for the remainder of the Session.'
},{
	name : 'Reputation',
	cost : '(1)',
	description: 'You are well known for something. Describe what this is and where or among whom it is known. When this notoriety is of benefit, once per Session you may double the dice of any Influence roll. When your Reputation works against you, treat it as a Complication.'
},{
	name : 'Sexy',
	cost : '(1)',
	description: 'Damn, you\'re hot! Nobody\'s kicking you out of bed for eating crackers. Once per Session double your influence/Seduction roll, or any Influence roll where your sexuality comes into play. Occasionally, being Sexy can be a Complication (so I hear), earn a Character Point when it is.'
},{
	name : 'Winning Smile',
	cost : '(1)',
	description: 'There\'s just something about a set of perfect, straight, pearly white chompers that makes people all mushy. When you flash yours, once per Session, double the dice of any Influence roll.'

},{
	name : 'Animal Affinity',
	cost : '(1)',
	description: 'Double the Attribute D of any Influence roll against animals, or Ride rolls.'
},{
	name : 'Aquatic',
	cost : '(2)',
	description: `You can live in the water. You won\'t drown, nor will you suffer ill-effects from being at depth. Your Velocity in the water is the same as your walking/jogging Velocity. You are assumed to have one level of Immunity (like the Powerk) from similar environmental forces, when they are used as an attack, at the GMs discretion.'
		As a Complication, you may choose to have limits on amount of time permissible underwater (or on land), depth limitations, appropriate Fatal or Incapacitating Weaknesses (to dry land, desiccating heat, salt vs fresh water and so on). Use your imagination.`
},{
	name : 'Backstory',
	cost : '(1+)',
	description: `Is a catch-all for any experiences that you\'ve had prior to taking up the mantle of crime fighter or super-villain. A Backstory is a short sentence, that can be spoken in a single breath, intended to fit on a single line of a character sheet, therefor no more than a dozen words or so. It describes some significant experiences in your character\'s history. Things such as “ex-navy SEAL, honorably discharged”, or “Alien diplomat” or “raised by wild honey badgers” might be examples. Each Amp, once per Session, allows you to either:
			Double any dice in a roll that would benefit from the elements of your Backstory
			Receive 1 Power Point worth of another Perk for a Scene, consistent with your Back,story.
			Each Amp of backstory requires at least one Complication related to it. Obligation, PTSD, Enemy are common Complications.`,
	limit : ['Mind', 'Mojo']
},{
	name : 'Base',
	cost : '(1+)',
	description: `You have a base of operations. It may or may not be secret. Each Amp of Base gives you one, and only one, of the following advantages:
		+1D to your Resources
		5 Power Points available for use only within the confines of your Base, perhaps communication or data analysis or as pick-up and drop off transportation between adventures. Otherwise these Power Points may not be used off the Base, or to affect events outside of the Base.
		Upscale the Area over which the Base covers (it is assumed, initially, to be up to 10m across, thus a small cave, an apartment, an office, a basement, a mobile home etc.).
		Unlike other Perks that allow you to redistribute your Amps as you see fit, once your Amps are assigned they are fixed, at least for one Session anyway. Changing your Base requires GM permission. Players may combine their Bases, and you can have as many Bases as you can afford.`,
	limit: ['Mind', 'Mojo']
},{
	name : 'Breakfall',
	cost : '(1)',
	description: 'Double your Soak against damage from falling, getting thrown or Knockback.'
},{
	name : 'Canine',
	cost : '(3)',
	description: 'You are dog-like. You may not look it, but you possess characteristics associated with your dog-ness (wolf, fox, hyena also applies here). You have an Amp in Mighty Olfaction and Audition each, as well as one Amp in Body Weapon (claws or teeth). You must take at least two Complications related to your canine-itude (Loyal-to-a-Fault, SuperFreak, Bad Breath, OCD/Go Fetch, Stinky-When-Wet, Enemy/Cats, OCD/Chase-Cars/Bark-at-Postal-Workers etc.)'
},{
	name : 'Cyborg',
	cost : '(2)',
	description: 'A significant portion of your body has been replaced with artificial components. You require half the sustenance others need and can override your own electronic pain receptors (double the D of any resistance rolls to pain, exposure, starvation and thirst). You suffer 1D less in penalties from Injury than others. However, the TN of all healing rolls is increased by +5.'
},{
	name : 'Destiny',
	cost : '(2)',
	description: 'Characters with Destiny feel they are fated to some grand purpose. Once per game Session a character may declare a failed roll is not part of their Destiny and immediately reroll to get a different result. They may keep the best of the two.'
},{
	name : 'Escape Artist',
	cost : '(1)',
	description: 'You are good at getting out of physical restraint; prison cells, bonds, underground complexes and so on. Once per Session double the dice of any roll related to this.'
},{
	name : 'Feline',
	cost : '(3)',
	description: 'You are cat-like. You may or may not look like a cat but you possess some of their features. You have low light vision (Dark Vision that doesn\'t work in complete darkness). You have one Amp in Mighty Olfaction and Audition, you have one Amp in Body Weapon (either claws or fangs). You have one Amp of Break Fall and Nimble. You must have at least two Complications related to your cat-ness (Arrogant, SuperFreak, OCD/Chase-Laser-Pointer-Dots, Addiction/Catnip, Enemy/Dogs etc.)'
},{
	name : 'Flashback',
	cost : '(1+)',
	description: 'Once per Session, and with GMs approval, you can stop the narrative and go back in time to briefly narrate why you have the convenient information, equipment or allies to help you in the current situation. It can\'t be something too outlandish and must fit the GMs storyline (GM is final arbiter on what is possible here).',
	limit : 'Mojo',
},{
	name : 'Indestructible Item',
	cost : '(1)',
	description: 'An object you own cannot be destroyed by anything short of GM fiat. It must be a non-living, non-sentient item (not a character, sidekick or minion). Although it can\'t be destroyed it can be lost or stolen. If lost, the Perk and Power Points are lost with it. Each item is a separate Perk.'
},{
	name : 'Item of Awe',
	cost : '(1)',
	description: 'On object you possess has a reputation or is of such beauty/power/value that it makes the bearer look good for simply having it. Double the dice of any Influence roll once per Session while you openly display it on your person. Losing the object loses the Perk. Each item is a separate Perk.'
},{
	name : 'Just the Thing',
	cost : '(1+)',
	description: 'You always seem to have “just the right thing” for any situation. It\'s spooky. Of course, it can\'t be something ridiculous like a grenade launcher pulled out of your speedos, it must be something that you could have reasonably carried with you or stowed away somewhere accessible.',
	limit: 'Mojo',
},{
	name : 'Just Won\'t Die',
	cost : '(1+)',
	description : 'A favorite of annoying villains everywhere, this Perk allows you to return from the dead no sooner than one Session after you\'ve died, provided you can come up with a plausible (for comic book superhero storylines that is) explanation for your return and seeming death. This Perk can be used only once per Amp purchased, and then it is gone forever.',
	limit: 'Mojo',
},{
	name : 'Karmic Bond',
	cost : '(1)',
	description: 'Allows you to spend your Hero Points on another specified character you\'ve bonded with. You also know when this character dies or suffers a Mortal Wound.'
},{
	name : 'Killer Instincts',
	cost : '(1)',
	description: 'Once per Session you can double the dice of any Skill roll required to win a life-and-death struggle against an opponent.'
},{
	name : 'Light Sleeper',
	cost : '(1)',
	description: 'Even while asleep, you make normal Perception checks to detect things happening around you.'
},{
	name : 'Liquid Courage',
	cost : '(1)',
	description: 'After at least enough alcohol for a -1D penalty, you may double the dice of any Will rolls against fear. Also, add +1 to your Soak while inebriated.'
},{
	name : 'Low Profile',
	cost : '(1)',
	description: 'You are ignorable, once per Session you may double the dice of a Stealth roll while amongst people or in a crowd. Incompatible with some Perks (Celebrity for example) or Complications (Obvious, or Notoriety).'
},{
	name : 'Lucky',
	cost : '(2+)',
	description: 'Once per Session you can declare you are feeling lucky. Double the result of your next roll.',
	limit: 'Mojo',
},{
	name : 'Medium',
	cost : '(2)',
	description: 'You see dead people. The invisible ones no one else can see. You hear them too but that doesn\'t seem as impressive. If they are close enough, you can even compel answers from them, but this is much harder. They must be incorporeal and within 10m for this aspect to work. To compel or bind them requires at least two Rounds of concentration and an Arcane roll opposed by the target\'s Will. The first Success holds the target fast. Each additional Success compels one honest answer. The entity can be bound for at most one Scene.'
},{
	name : 'Mineral',
	cost : '(3)',
	description: 'You are or can become composed of some normally solid inorganic matter like crystal, rock, metal or similar compound. You don\'t need to eat, breathe, drink, and you are totally immune to all poisons and disease. You are unaffected by the cold vacuum of space. If injured you don\'t heal (unless you have Regeneration), you must be repaired (“Dammit Jim, I\'m a doctor not a bricklayer!”). If always Mineral, you have the SuperFreak Complication, otherwise you have the Activation Complication.'
},{
	name : 'Minions',
	cost : '(2+)',
	description: `You have underlings who will do anything you tell them. They start with 8D in Attributes and 3 Power Points each. There is no Attribute maximum however, so particularly strong but dumb, or, smart but weak underlings can be created. You may spend additional Power Points on a single Minion, but not more than half of what you\'ve spent on yourself. Those Power Points apply only to that Minion, not all of them. Like Sidekicks, a Minion can cash in Attribute pips for additional Power Points. Each Attribute pip worth 1 additional Power Points. These can\'t exceed half the number of Power Points you\'ve spent on yourself.'
		Each additional Amp doubles the previous number of Minions or allows you to increase all your Minions\' Power Points by one. Minions can\'t have their own Minions or Sidekicks. If the Minions are permanent they come with the Liability Complication to you, otherwise they must be Activated and will hang around for a Scene. Minions can\'t have Minion or Sidekicks. Duration: Scene (or permanent, your choice).`
},{
	name : 'Occupation',
	cost : '(1+)',
	description: `Like Backstory, it is a catch-all intended to express the myriad benefits and responsibilities of having a career. Each Amp provides one, and only one, of the following benefits, once per Session:
		Double the Skill dice of any roll related to your profession
		Buy one Power Point worth of Perk related to your Occupation for a Scene.
		Occupation refers to your current employment and may change if you get a different line of work, without having to re-purchase the Occupation Perk. Simply apply the old benefits to your new Occupation. Each Amp of Occupation requires an associated Complication; Job, Obligation come to mind but there could easily be others.`,
	limit: 'Mind.'
},{
	name : 'Parkour',
	cost : '(1)',
	description: 'When running around a city, you can do amazing acrobatics. Twice per Session, double the dice of any Skill roll in an urban environment that would benefit from your athleticism.'
},{
	name : 'Patron',
	cost : '(1)',
	description: 'Someone rich and or powerful supports you in your efforts. Once per Session you may ask this person for a favor or assistance. Alternately you may double the dice of a Resources roll to symbolize their financial support, or an Influence roll by dropping their name. You must decide who your Patron is. This may also become a Complication, as your Patron\'s enemies become yours as well. Your Patron might also expect something in return for their generosity. Each Patron is a separate Perk.'
},{
	name : 'Play Dead',
	cost : '(1)',
	description: 'You have learned to slow your metabolism and bodily functions to the point where it is difficult to determine if you are even alive. Once per Session you may double the dice of any Deception or Performance Skill roll when pretending to be dead. Also, you may double the dice of all Stamina checks against Asphyxia, hypothermia or injected or ingested toxins, once per Session.'
},{
	name : 'Reptoid',
	cost : '(2)',
	description: 'You\'re green and scaly, this gives a +1 Armor Value. You also have claw-tipped fingers which grant you +1 damage on unarmed attacks. You might also be asexual. Sorry.'
},{
	name : 'Robot',
	cost : '(4)',
	description: 'You don\'t eat, breathe or sleep. With GM permission, you may not be affected by other hazards such as exposure or space. You can have your memory wiped. You don\'t heal but you can be repaired. As long as your memory core survives you may be rebuilt if destroyed, with a Hero Point.'
},{
	name : 'Sidekick',
	cost : '(3)',
	description: 'You have a boon companion willing to join you in your adventures. This character only gets 10D to spend on Attributes and 4 Power Points. Sidekicks can cash in Attribute pips for 1 Power Points, these must be spent solely on the Sidekick, not on your own character. These Power Points may not exceed half of what you\'ve spent on yourself. You may spend your own Power Points on improving your Sidekick but never more than half of what you\'ve spent on yourself. Sidekicks can earn Character Points and Hero Points as if they were regular PCs. Sidekicks can\'t have Sidekicks or Minions.'
},{
	name : 'Situational Awareness',
	cost : '(2)',
	description: 'Ignore the multiple opponent penalties in combat, and once per Session ignore one surprise penalty.'
},{
	name : 'Sorcerer',
	cost : '(3)',
	description:`You\'re magically sensitive. Magic spells actually work for you. See the Simple Magic System, Mini Six Bare Bones Edition page 10, this Perk allows you to use those spells. If your character is a magic-using hero, you may use either, or both, Powerks (like Magic) or the spells listed in Mini Six to describe your abilities. Consult your GM if they plan to use the Magic System presented in Mini Six Bare Bones.'
		If you are not using the Mini Six Bare Bones magic system, then the Sorcerer Perk may be used to double the D of any Arcane, Knowledge, Perception, Science or Technology roll pertaining to the “sorcerous”, once per Session. In addition, the Sorcerer can use either Destiny, Medium, Oracle or Patron once per Session.`
},{
	name : 'Subtle Powerk',
	cost : '(1)',
	description: 'Your Powerk doesn\'t attract any attention and can be used while hidden without giving you away. Someone actively seeking the source of the attack must make a Perception roll against your Stealth or Deception. You may double the D on either of these if actively trying to remain undetectable. This Perk must be purchased separately for each Powerk it affects. Some Powerks may not benefit from this Perk, at GMs discretion.'
},{
	name : 'Summon-able Item',
	cost : '(1)',
	description: 'One item you possess can be summoned to you at any time, at any place. The item must be specified at purchase and if the item is destroyed the Perk is too. The item may have a Size no larger than your static Mojo.'
},{
	name : 'Tempass',
	cost : '(1)',
	description: 'You always know what time it is, and you always know “when” you are. Useful for time travelers.'
},{
	name : 'True Love',
	cost : '(1)',
	description: 'You love someone or something and may double the dice of any single roll twice per Session in order to protect, defend or fight for the object of that love. This also acts as a Complication under the right circumstances.'
},{
	name : 'Undead',
	cost : '(2)',
	description: `You\'re dead. Sorry. But for some reason you\'re still up and around fightin\' (committin\'?) crime and stuff. You don\'t need to eat (except for maybe brains), drink (except for maybe blood), breathe, or sleep. You are completely immune to poisons and disease. If you are “killed” you can be restored given there is anything left of you to put back together (requires a Hero Point expenditure). If your brain (or heart, your choice) is destroyed, you are well and truly dead.
		To the living you are creepy and must take SuperFreak as a Complication. You may have other weaknesses too, such as garlic, holy symbols, running water and so forth. You must take at least two other appropriate Complications related to being one of the walking dead. When injured you don\'t heal normally, you must be repaired using either Science, Medicine or Trades/Taxidermy. Your Soak is halved against called headshots or heart-shots (your choice at purchase), holy symbols and fire/heat. Treat these as Complications when they occur.`
},{
	name : 'Vegetable',
	cost : '(2)',
	description: `You are or can become composed of plant-life. You don\'t need to eat. Your sustenance is provided by sunlight and CO2. Removal from sunlight affects you the same way Starvation affects humans. You do need to drink but your dehydration rolls are made each week instead of every day. Similarly, Asphyxiation rolls are made hourly instead of per Round. You automatically have one Amp in Immunity to Cold and Radiation. Your Soak is halved against fire/heat-based attacks.
		A Science roll, or maybe Biology or Botany must be used for assisted healing on you. If always in Vegetable form you have the SuperFreak Complication, otherwise you must take the Activate Complication.`
},{
	name : 'Wealthy',
	cost : '(1+)',
	description: 'Old money, industrialist, or benefactor of ill-gotten gains, however you did it, you have cheddar. Far more than most. Add +1D to Resources.',
	limit : ['Mind', 'Mojo'],
	limitSkill : true,
}]