type LevelData = {
  request: string;
  index: number;
  variables: { variableTypeID: number; variableName: string }[];
  functionBlocks: {
    id: number;
    blockTypeID: number;
    text: string;
    connectBlocks: number[];
  }[];
  testCases: {
    testCaseTypeID: number;
    text: string;
    casePairs: { value: number; variableBlockIndex: number }[];
  }[];
  validateURL: string;
};

// ======================================================================================================
const levelsData: LevelData[] = [
  {
    request:
      'Cho hai số A và B, hãy tìm số lớn nhất trong hai số này và gán giá trị đó cho Max.',
    index: 0,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'Max',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      { id: 6, blockTypeID: 1, text: 'Max = A', connectBlocks: [2, 0] },
      { id: 7, blockTypeID: 1, text: 'Max = B', connectBlocks: [2, 1] },
      { id: 8, blockTypeID: 7, text: 'Xuất Max', connectBlocks: [] },
      { id: 9, blockTypeID: 12, text: 'Kết thúc', connectBlocks: [2, 0, 1] },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/max-ab',
  },
  {
    request:
      'Cho hai số A và B, hãy tìm ước chung lớn nhất của hai số này và gán giá trị đó cho UCLN.',
    index: 1,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'UCLN',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 2,
        text: 'A = B',
        connectBlocks: [0, 1],
      },
      {
        id: 6,
        blockTypeID: 1,
        text: 'UCLN = A',
        connectBlocks: [2, 0],
      },
      {
        id: 7,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      {
        id: 8,
        blockTypeID: 9,
        text: 'A = A - B',
        connectBlocks: [0, 1, 0],
      },
      {
        id: 9,
        blockTypeID: 9,
        text: 'B = B - A',
        connectBlocks: [1, 0, 1],
      },
      {
        id: 10,
        blockTypeID: 12,
        text: 'Kết thúc',
        connectBlocks: [2, 0, 1],
      },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 4\nB = 6',
        casePairs: [
          {
            value: 4,
            variableBlockIndex: 0,
          },
          {
            value: 6,
            variableBlockIndex: 1,
          },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 12\nB = 15',
        casePairs: [
          {
            value: 12,
            variableBlockIndex: 0,
          },
          {
            value: 15,
            variableBlockIndex: 1,
          },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/ucln-ab',
  },
  {
    request:
      'Cho hai số A và B, hãy tìm số nhỏ nhất trong hai số này và gán giá trị đó cho Min.',
    index: 2,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'Min',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 3,
        text: 'A < B',
        connectBlocks: [0, 1],
      },
      { id: 6, blockTypeID: 1, text: 'Min = A', connectBlocks: [2, 0] },
      { id: 7, blockTypeID: 1, text: 'Min = B', connectBlocks: [2, 1] },
      { id: 8, blockTypeID: 7, text: 'Xuất Min', connectBlocks: [] },
      { id: 9, blockTypeID: 12, text: 'Kết thúc', connectBlocks: [2, 0, 1] },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/min-ab',
  },
  {
    request:
      'Cho hai số A và B, chỉ sử dụng các thao tác tăng, giảm một đơn vị, hãy làm cho A và B có giá trị bằng nhau.',
    index: 3,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 3,
        text: 'A < B',
        connectBlocks: [0, 1],
      },
      {
        id: 6,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      { id: 7, blockTypeID: 13, text: 'A = A + 1', connectBlocks: [0] },
      { id: 8, blockTypeID: 14, text: 'A = A - 1', connectBlocks: [0] },
      { id: 9, blockTypeID: 7, text: 'Xuất A, B', connectBlocks: [] },
      { id: 10, blockTypeID: 12, text: 'Kết thúc', connectBlocks: [0, 1] },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/equal-ab',
  },
  {
    request:
      'Cho ba số A, B và C, hãy tìm số lớn nhất trong ba số này và gán giá trị đó cho Max.',
    index: 4,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'C',
      },
      {
        variableTypeID: 0,
        variableName: 'Max',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B, C',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      {
        id: 6,
        blockTypeID: 5,
        text: 'C > Max',
        connectBlocks: [2, 3],
      },
      { id: 7, blockTypeID: 1, text: 'Max = A', connectBlocks: [3, 0] },
      { id: 8, blockTypeID: 1, text: 'Max = B', connectBlocks: [3, 1] },
      { id: 9, blockTypeID: 1, text: 'Max = C', connectBlocks: [3, 2] },
      { id: 10, blockTypeID: 7, text: 'Xuất Max', connectBlocks: [] },
      {
        id: 11,
        blockTypeID: 12,
        text: 'Kết thúc',
        connectBlocks: [3, 0, 1, 2],
      },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2\nC = 3',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
          { value: 3, variableBlockIndex: 2 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2\nC = 4',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
          { value: 4, variableBlockIndex: 2 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 2\nB = 7\nC = 1',
        casePairs: [
          { value: 2, variableBlockIndex: 0 },
          { value: 7, variableBlockIndex: 1 },
          { value: 1, variableBlockIndex: 2 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/max-abc',
  },
  {
    request:
      'Cho ba số A, B và C, hãy tìm số nhỏ nhất trong ba số này và gán giá trị đó cho Min.',
    index: 5,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'C',
      },
      {
        variableTypeID: 0,
        variableName: 'Min',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B, C',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 3,
        text: 'A < B',
        connectBlocks: [0, 1],
      },
      {
        id: 6,
        blockTypeID: 3,
        text: 'C < Min',
        connectBlocks: [2, 3],
      },
      { id: 7, blockTypeID: 1, text: 'Min = A', connectBlocks: [3, 0] },
      { id: 8, blockTypeID: 1, text: 'Min = B', connectBlocks: [3, 1] },
      { id: 9, blockTypeID: 1, text: 'Min = C', connectBlocks: [3, 2] },
      { id: 10, blockTypeID: 7, text: 'Xuất Min', connectBlocks: [] },
      {
        id: 11,
        blockTypeID: 12,
        text: 'Kết thúc',
        connectBlocks: [3, 0, 1, 2],
      },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 1\nB = 2\nC = 3',
        casePairs: [
          { value: 1, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
          { value: 3, variableBlockIndex: 2 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 5\nB = 2\nC = 4',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 2, variableBlockIndex: 1 },
          { value: 4, variableBlockIndex: 2 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 2\nB = 7\nC = 1',
        casePairs: [
          { value: 2, variableBlockIndex: 0 },
          { value: 7, variableBlockIndex: 1 },
          { value: 1, variableBlockIndex: 2 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/min-abc',
  },
  {
    request:
      'Cho hai số A và B, hãy tìm bội chung nhỏ nhất của hai số này và gán giá trị đó cho BCNN.',
    index: 6,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'B',
      },
      {
        variableTypeID: 0,
        variableName: 'UCLN',
      },
      {
        variableTypeID: 0,
        variableName: 'BCNN',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A, B',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 2,
        text: 'A = B',
        connectBlocks: [0, 1],
      },
      {
        id: 6,
        blockTypeID: 1,
        text: 'UCLN = A',
        connectBlocks: [2, 0],
      },
      {
        id: 7,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      {
        id: 8,
        blockTypeID: 9,
        text: 'A = A - B',
        connectBlocks: [0, 1, 0],
      },
      {
        id: 9,
        blockTypeID: 9,
        text: 'B = B - A',
        connectBlocks: [1, 0, 1],
      },
      {
        id: 10,
        blockTypeID: 10,
        text: 'BCNN = A * B',
        connectBlocks: [0, 1, 3],
      },
      {
        id: 11,
        blockTypeID: 11,
        text: 'BCNN = BCNN/UCLN',
        connectBlocks: [3, 2, 3],
      },
      {
        id: 12,
        blockTypeID: 12,
        text: 'Kết thúc',
        connectBlocks: [2, 0, 1],
      },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 4\nB = 6',
        casePairs: [
          {
            value: 4,
            variableBlockIndex: 0,
          },
          {
            value: 6,
            variableBlockIndex: 1,
          },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 12\nB = 15',
        casePairs: [
          {
            value: 12,
            variableBlockIndex: 0,
          },
          {
            value: 15,
            variableBlockIndex: 1,
          },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/ucln-ab',
  },
  {
    request:
      'Cho số A, tìm số Fibonacci có giá trị nhỏ nhất và lớn hơn A, gán giá trị đó cho Y',
    index: 7,
    variables: [
      {
        variableTypeID: 0,
        variableName: 'A',
      },
      {
        variableTypeID: 0,
        variableName: 'X1',
      },
      {
        variableTypeID: 0,
        variableName: 'X2',
      },
      {
        variableTypeID: 0,
        variableName: 'Y',
      },
    ],
    functionBlocks: [
      {
        id: 3,
        blockTypeID: 0,
        text: 'Bắt đầu',
        connectBlocks: [],
      },
      {
        id: 4,
        blockTypeID: 7,
        text: 'Nhập A',
        connectBlocks: [],
      },
      {
        id: 5,
        blockTypeID: 3,
        text: 'Y < A',
        connectBlocks: [3, 0],
      },
      {
        id: 6,
        blockTypeID: 5,
        text: 'A > B',
        connectBlocks: [0, 1],
      },
      { id: 7, blockTypeID: 13, text: 'Y = X1 + X2', connectBlocks: [0] },
      { id: 8, blockTypeID: 1, text: 'X1 = X2', connectBlocks: [1, 2] },
      { id: 8, blockTypeID: 1, text: 'X2 = Y', connectBlocks: [2, 3] },
      { id: 9, blockTypeID: 7, text: 'Xuất Y', connectBlocks: [] },
      { id: 10, blockTypeID: 12, text: 'Kết thúc', connectBlocks: [3, 0] },
    ],
    testCases: [
      {
        testCaseTypeID: 0,
        text: 'A = 5',
        casePairs: [
          { value: 5, variableBlockIndex: 0 },
          { value: 0, variableBlockIndex: 1 },
          { value: 1, variableBlockIndex: 2 },
        ],
      },
      {
        testCaseTypeID: 0,
        text: 'A = 10',
        casePairs: [
          { value: 10, variableBlockIndex: 0 },
          { value: 0, variableBlockIndex: 1 },
          { value: 1, variableBlockIndex: 2 },
        ],
      },
    ],
    validateURL:
      'https://flow-chart-game-server.vercel.app/gameplay/validate/equal-ab',
  },
];

export { levelsData, LevelData };
