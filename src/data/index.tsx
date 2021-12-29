export const COUNT_TYPES = {
  REPS: "reps",
  TIME: "time",
};

export const EXERCISE_TYPES = {
  EXERCISE: "exercise",
  SKILL: "skill",
  WARMUP: "warmup",
  REST: "rest",
};

export const BODY_PARTS = {
  BACK: "back",
  BICEPS: "biceps",
};
export const Equipment = [
  {
    id: 6001,
    name: "Rings",
    description: "",
    price: "",
    icon: null,
    storeLink: null,
  },
  {
    id: 6002,
    name: "Bands",
    description: "",
    price: "",
    icon: null,
    storeLink: null,
  },
];
export const Exercises = [
  {
    id: 5005,
    name: "Pullover",
    countType: COUNT_TYPES.EXERCISE,
    shortDescription: "This is the short description",
    description:
      "Hang from the rings with a pronated grip. Keep arms straight the whole movement. ",
    animation: null,
    video: null,
    links: [],
    secondsToExecute: 3.5,
    data: { bodyParts: [BODY_PARTS.BACK, BODY_PARTS.BICEPS] },
    equipment: [Equipment[1]],
    ExpPointsPerCount: 1,
    level: 1,
  },
  {
    id: 5006,
    name: "Ring Pull Up With Bands",
    countType: COUNT_TYPES.EXERCISE,
    shortDescription: "This is a short description of the ring pull-up",
    description:
      "Hang from the rings with a pronated grip. Keep arms straight the whole movement. From the dead hang position, pull downwards with your shoulders so that your ears come away from your shoulders. Hold the position, and then slowly release. Remember to not pull with your biceps. Keep your core engaged, and squeeze with your legs and remain in a hollow body position.",
    animation: null,
    video: null,
    links: [],
    secondsToExecute: 3.5,
    data: { bodyParts: [BODY_PARTS.BACK, BODY_PARTS.BICEPS] },
    equipment: [Equipment[0]],
    ExpPointsPerCount: 1,
    level: 1,
  },
  {
    id: 5007,
    name: "Ring Muscle Up With Bands",
    countType: COUNT_TYPES.EXERCISE,
    shortDescription: "",
    description:
      "The muscle-up is an advanced strength training exercise, but remains fairly simple within the domain of gymnastics. It is a combination routine of a radial pull-up followed by a dip. Variations exist for the rings as well as the bar.",
    animation: null,
    video: null,
    links: [],
    secondsToExecute: 3.5,
    data: { bodyParts: [BODY_PARTS.BACK, BODY_PARTS.BICEPS] },
    equipment: [Equipment[0]],
    ExpPointsPerCount: 1,
    level: 1,
  },
  {
    id: 5008,
    name: "Ring High Pull Up",
    countType: COUNT_TYPES.EXERCISE,
    shortDescription: "",
    description: "Pull up high",
    animation: null,
    video: null,
    links: [],
    secondsToExecute: 3.5,
    data: { bodyParts: [BODY_PARTS.BACK, BODY_PARTS.BICEPS] },
    equipment: [Equipment[0]],
    ExpPointsPerCount: 1,
    level: 1,
  },
  {
    id: 5009,
    name: "Ring Dips",
    countType: COUNT_TYPES.EXERCISE,
    shortDescription: "",
    description: "Dip down and back up.",
    animation: null,
    video: null,
    links: [],
    secondsToExecute: 3.5,
    data: { bodyParts: [BODY_PARTS.BACK, BODY_PARTS.BICEPS] },
    equipment: [Equipment[0]],
    ExpPointsPerCount: 1,
    level: 1,
  },
];
export const Posts = [
  {
    id: 7001,
    title: "Progress Update",
    notes:
      "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. It is so beautiful and I am so happy.",
    type: "progress-update",
    isPublic: false,
    date: new Date(),
    photos: ["https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Couple1.jpg"],
    videos: [],
    skillStep: null,
    likes: 0,
    comments: [],
  },
  {
    id: 7002,
    title: null,
    notes:
      "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color.  It is so beautiful and I am so happy.",
    type: "progress-update",
    isPublic: true,
    date: new Date(),
    photos: [],
    videos: [],
    skillStep: null,
    likes: 0,
    comments: [],
  },
  {
    title: "Progress Update",
    notes:
      "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. It is so beautiful and I am so happy.",
    type: "progress-update",
    isPublic: false,
    date: new Date(),
    photos: [],
    videos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/M30-1422.mp4?alt=media&token=1707e6eb-eee3-47c8-a81c-06fd9cb8400d",
    ],
    skillStep: null,
    likes: 0,
    comments: [],
  },
  {
    title: "Progress Update",
    notes:
      "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. It is so beautiful and I am so happy.",
    type: "progress-update",
    isPublic: true,
    date: new Date(),
    photos: [],
    videos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/M30-1422.mp4?alt=media&token=1707e6eb-eee3-47c8-a81c-06fd9cb8400d",
    ],
    skillStep: null,
    likes: 5,
    comments: [
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
    ],
  },
  {
    title: "Progress Update",
    notes:
      "I loved this dress so much as soon as I tried it on I knew I had to buy it in another color. It is so beautiful and I am so happy.",
    type: "progress-update",
    isPublic: true,
    date: new Date(),
    photos: [],
    videos: [],
    skillStep: null,
    likes: 5,
    comments: [
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
    ],
  },
  {
    title: "Jane just reached level 6!",
    notes: "",
    type: "level-up",
    isPublic: true,
    date: new Date(),
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/image%2042.png?alt=media&token=7bcd9d36-ea3e-48de-bd42-b046571f5573",
    ],
    videos: [],
    skillStep: null,
    likes: 5,
    comments: [
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
      {
        text: "Great job!",
        user: 1,
        date: new Date(),
      },
    ],
  },
];
export const SkillSteps = [
  {
    id: 4001,
    type: EXERCISE_TYPES.SKILL,
    exerciseRef: {
      id: 5001,
      name: "Kip Up",
      countType: COUNT_TYPES.REPS,
      shortDescription: "Upside down hands on the ground, arms straight.",
      description:
        "Hang from the rings with a pronated grip. Keep arms straight the whole movement. From the dead hang position, pull downwards with your shoulders so that your ears come away from your shoulders. Hold the position, and then slowly release. Remember to not pull with your biceps. Keep your core engaged, and squeeze with your legs and remain in a hollow body position.",
      animation: null,
      video: null,
      links: [],
      secondsToExecute: 1,
      data: { bodyParts: [BODY_PARTS.BACK, BODY_PARTS.BICEPS] },
      equipment: [Equipment[0]],
      ExpPointsPerCount: 1,
      level: 9,
    },
    substeps: [
      { reps: 1, achievementRate: 95 },
      { reps: 5, achievementRate: 94 },
      { reps: 10, achievementRate: 92 },
    ],
    incrementationXpPoints: 5,
    incrementationStep: 1,
    officialGrade: null,
    exercises: [],
    previousSteps: [],
    followingSteps: [4002],
    posts: [Posts[0], Posts[1], Posts[2]],
    communityPosts: [Posts[3], Posts[3], Posts[3], Posts[3]],
  },
];

export const SkillTrees = [
  {
    id: 3001,
    name: "Muscle Up",
    tags: [],
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    skillSteps: [SkillSteps[0], SkillSteps[1], SkillSteps[2], SkillSteps[3]],
    groupBy: {
      id: 8001,
      name: "Main Elements",
      levelRequired: 0,
    },
  },
  {
    id: 3002,
    name: "Iron Cross",
    tags: [],
    icon: "https://firebasestorage.googleapis.com  /v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    skillSteps: [],
    groupBy: {
      id: 8001,
      name: "Main Elements",
      levelRequired: 0,
    },
  },
  {
    id: 3003,
    name: "Classic Swing",
    tags: [],
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    skillSteps: [],
    groupBy: null,
  },
  {
    id: 3004,
    name: "XR Hold",
    tags: [],
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    skillSteps: [],
    groupBy: {
      id: 8002,
      name: "Foundations",
      levelRequired: 0,
    },
  },
  {
    id: 3005,
    name: "Zanetti",
    tags: [],
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    skillSteps: [],
    groupBy: {
      id: 8003,
      name: "Complexe Combinations",
      levelRequired: 8,
    },
  },
];

export const Challenges = [
  {
    id: 2001,
    name: "Blouse",
    subtitle: "OVS",
    tags: ["new"],
    price: 30,
    rating: 0,
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/rings.png?alt=media&token=5e56b5a3-636e-40a3-9acf-738b05566d9c",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/mensgymnastics.png?alt=media&token=84e756e3-4b3e-4ba4-9f12-5e4ddce3c565",
  },
  {
    id: 2002,
    name: "T-Shirt Sailing",
    subtitle: "Mango Boy",
    tags: [],
    price: 10,
    rating: 3.5,
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/rings.png?alt=media&token=5e56b5a3-636e-40a3-9acf-738b05566d9c",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/mensgymnastics.png?alt=media&token=84e756e3-4b3e-4ba4-9f12-5e4ddce3c565",
  },
  {
    id: 2003,
    name: "Trousers Sailing",
    subtitle: "Mango Boy",
    tags: ["sale"],
    price: 23,
    rating: 5,
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/rings.png?alt=media&token=5e56b5a3-636e-40a3-9acf-738b05566d9c",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/mensgymnastics.png?alt=media&token=84e756e3-4b3e-4ba4-9f12-5e4ddce3c565",
  },
  {
    id: 2004,
    name: "Blouse Orange",
    tags: [],
    price: 40,
    rating: 0,
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
  },
  {
    id: 2005,
    name: "Vault green",
    tags: [],
    price: 45,
    rating: 0,
    icon: "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    illustration:
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/parallel-bars.png?alt=media&token=03bd07d4-553f-47dd-ba87-0b0b86643691",
    skillGroups: [],
  },
];

export const Notes = [
  {
    id: 1001,
    name: "My note title 3",
    tags: ["Tag", "Tag2"],
    date: new Date(),
    text: "My note descriptionMy note descriptionMy note descriptionMy note description",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/mensgymnastics.png?alt=media&token=84e756e3-4b3e-4ba4-9f12-5e4ddce3c565",
    ],
    videos: [],
    sounds: [],
  },
  {
    id: 1002,
    name: "My note title",
    tags: ["Tag"],
    date: new Date(),
    text: "My note descriptionMy note descriptionMy note descriptionMy note description",
    photos: [],
    videos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/M30-1422.mp4?alt=media&token=1707e6eb-eee3-47c8-a81c-06fd9cb8400d",
    ],
    sounds: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/crickets.mp3?alt=media&token=dd47f18f-7edd-4a2a-8e36-5f41ac3f6727",
    ],
  },
  {
    id: 1003,
    name: "My note title 5",
    tags: [],
    date: new Date(),
    text: "My note descriptionMy note descriptionMy note descriptionMy note description",
    photos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/mensgymnastics.png?alt=media&token=84e756e3-4b3e-4ba4-9f12-5e4ddce3c565",
    ],
    videos: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/M30-1422.mp4?alt=media&token=1707e6eb-eee3-47c8-a81c-06fd9cb8400d",
    ],
    sounds: [
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/crickets.mp3?alt=media&token=dd47f18f-7edd-4a2a-8e36-5f41ac3f6727",
      "https://firebasestorage.googleapis.com/v0/b/skill-learning-app-1.appspot.com/o/can.mp3?alt=media&token=fc102a65-168f-4861-bc30-53b1c2effae7",
    ],
  },
];

export const CommunityPosts = [Posts[3], Posts[4], Posts[5]];

/**************** */
//USER
/**************** */
export const UserData = {
  id: 1,
  displayName: "Harvey",
  image: null,
  email: "myemail@gmail.com",
  password: "myhashedpassword",
  lastLogin: new Date(),
  signUpDate: new Date(),
  experiencePoints: 534,
  // selectedTheme: {
  //   mainColor: Themes.mainColors[0],
  //   backgroundColor: Themes.backgroundColors[0],
  // },
  notificationSettings: {
    training: true,
    news: false,
  },
  stats: {
    workoutsCompleted: 0,
  },
  notes: Notes,
  skillSteps: SkillSteps,
};
