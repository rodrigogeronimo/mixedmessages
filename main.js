const inspiring = ['Pay attention. Be astonished. Tell about it', 'Be curious', 'Somewhere, something incredible is waiting to be known', 'Life was meant for good friends and great adventure',
'The human spirit needs places where nature has not been rearranged by the hand of man', 'You never know what could be on the other side', 'Life begins at the end of your comfort zone',
'To live will be an awfully big adventure', 'A strong desire or urge to wander or travel and explore the world', 'Blessed are the curious for they shall have adventures', 'Seek adventures that open your mind',
'We do not inherit the earth from our ancestors. We borrow it from our children.', 'Life is either a daring adventure or nothing at all', 'Choose your projection wisely', 'Go into the world and do well, but more importantly go into the world and do good', 'The good and the wise lead quiet lives'];

const moods = ['Afraid', 'Aggravated', 'Angry', 'Anxious', 'Ashamed', 'Assertive', 'Burdened', 'Brave', 'Calm', 'Cautious', 'Challenged', 'Cheerful', 'Cherished', 'Comforted', 'Contented', 'Creative', 'Curious', 'Depressed', 
'Embarrassed', 'Energized', 'Envious', 'Excited', 'Furious', 'Guilty', 'Grumpy', 'Happy', 'Hopeful', 'Humiliated', 'Hurt', 'Indifferent', 'Insecure', 'Irritated', 'Lonely', 'Loved', 'Mad', 'Optimistic', 'Overwhelmed', 'Panicked',
'Peaceful', 'Positive', 'Pessimistic', 'Prepared', 'Proud', 'Ready for change', 'Regretful', 'Relieved', 'Renewed', 'Sad', 'Self-confident', 'Shameful', 'Skeptical', 'Sorrowful', 'Suicidal', 'Worried'];


const thoughts = ['I can’t do this.', 'I’ll try.', 'There’s no use in trying.', 'Let me do my best.', 'I can deal with this problem one', 'step at a time.', 'Everyone will laugh at me.', 'I have good ideas.', 'I’ve never been able to succeed.', 
'I don’t deserve to be loved.', 'I am worthy of more.', 'What’s the worst that can happen?', 'I have valuable talents.', 'So what if I don’t live up to my expectations?', 'Nobody’s perfect.', 'I can do some things well, and there are some things I need to work on.'];

const selectRandomMessage = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const dailyMessage = () => {
    `Today is ${new Date(Date.now()).toDateString()}. Today your mood will be ${selectRandomMessage(moods)}. Maybe this is good for you, maybe not. However, here a thought for you: ${selectRandomMessage(thoughts)}. OK, you want more. So, here's an inspiring message: ${selectRandomMessage(inspiring)}. That's it for today. Come back tomorrow for more!`
}



