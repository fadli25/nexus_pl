export type CardinalStakePool =
  {
    version: "0.1.0",
    name: "nexus",
    instructions: [
      {
        name: "initUser",
        accounts: [
          {
            name: "user",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "info",
            type: {
              defined: "UserInfo"
            }
          }
        ]
      },
      {
        name: "updateUser",
        accounts: [
          {
            name: "user",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "info",
            type: {
              defined: "UpdateUserInfo"
            }
          }
        ]
      },
      {
        name: "closeUser",
        accounts: [
          {
            name: "user",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "initProject",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false
          },
          {
            name: "founder",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "info",
            type: {
              defined: "ProjectInfo"
            }
          }
        ]
      },
      {
        name: "updateProject",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false
          },
          {
            name: "founder",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "info",
            type: {
              defined: "UpdateProjectInfo"
            }
          }
        ]
      },
      {
        name: "initInvitation",
        accounts: [
          {
            name: "invitation",
            isMut: true,
            isSigner: false
          },
          {
            name: "project",
            isMut: true,
            isSigner: false
          },
          {
            name: "user",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: [
          {
            name: "role",
            type: "string"
          }
        ]
      },
      {
        name: "acceptInvt",
        accounts: [
          {
            name: "apa",
            isMut: true,
            isSigner: false
          },
          {
            name: "invitation",
            isMut: true,
            isSigner: false
          },
          {
            name: "project",
            isMut: true,
            isSigner: false
          },
          {
            name: "user",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "refuseInvt",
        accounts: [
          {
            name: "invitation",
            isMut: true,
            isSigner: false
          },
          {
            name: "project",
            isMut: false,
            isSigner: false
          },
          {
            name: "user",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      },
      {
        name: "removeUser",
        accounts: [
          {
            name: "apa",
            isMut: true,
            isSigner: false
          },
          {
            name: "invitation",
            isMut: true,
            isSigner: false
          },
          {
            name: "project",
            isMut: true,
            isSigner: false
          },
          {
            name: "escrow",
            isMut: true,
            isSigner: false
          },
          {
            name: "founder",
            isMut: true,
            isSigner: false
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false
          }
        ],
        args: []
      }
    ],
    accounts: [
      {
        name: "Founder",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "address",
              type: "publicKey"
            },
            {
              name: "name",
              type: "string"
            },
            {
              name: "image",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "roles",
              type: "string"
            },
            {
              name: "levelOfExpertise",
              type: "string"
            },
            {
              name: "paymentRatePerHour",
              type: "string"
            },
            {
              name: "profileOverview",
              type: "string"
            },
            {
              name: "links",
              type: "string"
            }
          ]
        }
      },
      {
        name: "User",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "address",
              type: "publicKey"
            },
            {
              name: "nigotion",
              type: "bool"
            },
            {
              name: "paymentRatePerHour",
              type: "u64"
            },
            {
              name: "name",
              type: "string"
            },
            {
              name: "image",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "roles",
              type: "string"
            },
            {
              name: "levelOfExpertise",
              type: "string"
            },
            {
              name: "profileOverview",
              type: "string"
            },
            {
              name: "links",
              type: "string"
            }
          ]
        }
      },
      {
        name: "Project",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "founder",
              type: "publicKey"
            },
            {
              name: "hiring",
              type: "bool"
            },
            {
              name: "jobs",
              type: "u16"
            },
            {
              name: "members",
              type: "u16"
            },
            {
              name: "name",
              type: "string"
            },
            {
              name: "logo",
              type: "string"
            },
            {
              name: "linkThread",
              type: "string"
            },
            {
              name: "linkDiscord",
              type: "string"
            },
            {
              name: "linkWebsite",
              type: "string"
            },
            {
              name: "linkTwitter",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "chain",
              type: "string"
            },
            {
              name: "projectOverview",
              type: "string"
            }
          ]
        }
      },
      {
        name: "OneTimePayment",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "founder",
              type: "publicKey"
            },
            {
              name: "reciever",
              type: "publicKey"
            },
            {
              name: "paymentRatePerHour",
              type: "u64"
            },
            {
              name: "workingHours",
              type: "u64"
            },
            {
              name: "startAt",
              type: "i64"
            },
            {
              name: "lastUpdateAt",
              type: "i64"
            },
            {
              name: "endAt",
              type: "i64"
            },
            {
              name: "authority",
              type: "publicKey"
            },
            {
              name: "live",
              type: "bool"
            }
          ]
        }
      },
      {
        name: "Invt",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "project",
              type: "publicKey"
            },
            {
              name: "user",
              type: "publicKey"
            },
            {
              name: "status",
              type: "u8"
            },
            {
              name: "role",
              type: "string"
            },
            {
              name: "name",
              type: "string"
            },
            {
              name: "projectDescription",
              type: "string"
            }
          ]
        }
      },
      {
        name: "APA",
        type: {
          kind: "struct",
          fields: [
            {
              name: "user",
              type: "publicKey"
            },
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "project",
              type: "publicKey"
            },
            {
              name: "name",
              type: "string"
            },
            {
              name: "role",
              type: "string"
            }
          ]
        }
      },
      {
        name: "Identifier",
        type: {
          kind: "struct",
          fields: [
            {
              name: "bump",
              type: "u8"
            },
            {
              name: "count",
              type: "u64"
            }
          ]
        }
      }
    ],
    types: [
      {
        name: "PaymentInfo",
        type: {
          kind: "struct",
          fields: [
            {
              name: "paymentRatePerHour",
              type: "u64"
            },
            {
              name: "workingHours",
              type: "u64"
            },
            {
              name: "endAt",
              type: "i64"
            },
            {
              name: "roles",
              type: "string"
            }
          ]
        }
      },
      {
        name: "ProjectInfo",
        type: {
          kind: "struct",
          fields: [
            {
              name: "name",
              type: "string"
            },
            {
              name: "logo",
              type: "string"
            },
            {
              name: "linkDiscord",
              type: "string"
            },
            {
              name: "linkThread",
              type: "string"
            },
            {
              name: "linkWebsite",
              type: "string"
            },
            {
              name: "linkTwitter",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "projectOverview",
              type: "string"
            },
            {
              name: "hiring",
              type: "bool"
            }
          ]
        }
      },
      {
        name: "UpdateProjectInfo",
        type: {
          kind: "struct",
          fields: [
            {
              name: "name",
              type: "string"
            },
            {
              name: "logo",
              type: "string"
            },
            {
              name: "linkDiscord",
              type: "string"
            },
            {
              name: "linkThread",
              type: "string"
            },
            {
              name: "linkWebsite",
              type: "string"
            },
            {
              name: "linkTwitter",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "roles",
              type: "string"
            },
            {
              name: "projectOverview",
              type: "string"
            },
            {
              name: "hiring",
              type: "bool"
            }
          ]
        }
      },
      {
        name: "UserInfo",
        type: {
          kind: "struct",
          fields: [
            {
              name: "name",
              type: "string"
            },
            {
              name: "image",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "roles",
              type: "string"
            },
            {
              name: "levelOfExpertise",
              type: "string"
            },
            {
              name: "paymentRatePerHour",
              type: "u64"
            },
            {
              name: "profileOverview",
              type: "string"
            },
            {
              name: "links",
              type: "string"
            },
            {
              name: "nigotion",
              type: "bool"
            }
          ]
        }
      },
      {
        name: "UpdateUserInfo",
        type: {
          kind: "struct",
          fields: [
            {
              name: "name",
              type: "string"
            },
            {
              name: "image",
              type: "string"
            },
            {
              name: "category",
              type: "string"
            },
            {
              name: "roles",
              type: "string"
            },
            {
              name: "levelOfExpertise",
              type: "string"
            },
            {
              name: "paymentRatePerHour",
              type: "u64"
            },
            {
              name: "profileOverview",
              type: "string"
            },
            {
              name: "links",
              type: "string"
            },
            {
              name: "nigotion",
              type: "bool"
            }
          ]
        }
      }
    ],
    errors: [
      {
        code: 6000,
        name: "InvalidNftCollection",
        msg: "not the right collection"
      },
      {
        code: 6001,
        name: "MissingNft",
        msg: "missing nft"
      },
      {
        code: 6002,
        name: "PublicKeyMismatch",
        msg: "PublicKey Mismatch!"
      },
      {
        code: 6003,
        name: "PaymentNotLive",
        msg: "Payment Not Live!"
      },
      {
        code: 6004,
        name: "Uninitialized",
        msg: "Uninitialized!"
      },
      {
        code: 6005,
        name: "AccountNotFound",
        msg: "account not found"
      },
      {
        code: 6006,
        name: "RemainingAccountNotFound",
        msg: "remaining account not found"
      },
      {
        code: 6007,
        name: "MissionAlreadyDone",
        msg: "you already did that mission!"
      },
      {
        code: 6008,
        name: "IncorrectOwner",
        msg: "Incorrect Owner!"
      },
      {
        code: 6009,
        name: "InstructionBuilderFailed",
        msg: "invalide transfer builder instraction"
      },
      {
        code: 6010,
        name: "BumpNotFound",
        msg: "bump not found"
      },
      {
        code: 6011,
        name: "InvalidCalculation",
        msg: "Invalid calculation"
      },
      {
        code: 6012,
        name: "InvalidShare",
        msg: "Invalid share"
      },
      {
        code: 6013,
        name: "NoShareLeft",
        msg: "No share left!"
      },
      {
        code: 6014,
        name: "NotEnoughShareLeft",
        msg: "No enough share left!"
      },
      {
        code: 6015,
        name: "NotEnoughShare",
        msg: "No enough share!"
      },
      {
        code: 6016,
        name: "NotTheCreator",
        msg: "Not the fract nft Creator!"
      },
      {
        code: 6017,
        name: "MintAlreadyStart",
        msg: "Mint already start!"
      },
      {
        code: 6018,
        name: "MintNotEndYet",
        msg: "Mint Not End Yet!"
      },
      {
        code: 6019,
        name: "TokenAccountNotOwnedByCreator",
        msg: "Token Account Not Owned By Creator!"
      },
      {
        code: 6020,
        name: "NoFractNftPlaced",
        msg: "No Fract Nft Placed!"
      },
      {
        code: 6021,
        name: "CannotInitVoteWithListedShare",
        msg: "Cannot Init Vote With Listed Share!"
      },
      {
        code: 6022,
        name: "CannotInitPriceReserveWithListedShare",
        msg: "Cannot Init Price Reserve With Listed Share!"
      },
      {
        code: 6023,
        name: "CannotVoteWithListedShare",
        msg: "Cannot Vote With Listed Share!"
      },
      {
        code: 6024,
        name: "CannotListedWithVoteState",
        msg: "Cannot Listed With Vote State!"
      },
      {
        code: 6025,
        name: "InvalidPercentage",
        msg: "Invalid Percentage!"
      },
      {
        code: 6026,
        name: "NotTheRightState",
        msg: "Not The Right State!"
      },
      {
        code: 6027,
        name: "NotHighestBidder",
        msg: "Not Highest Bidder!"
      },
      {
        code: 6028,
        name: "BelowReservePrice",
        msg: "Below Reserve Price!"
      },
      {
        code: 6029,
        name: "BelowBidIncrement",
        msg: "Below Bid Increment!"
      },
      {
        code: 6030,
        name: "BidTooLow",
        msg: "Bid Too Low!"
      },
      {
        code: 6031,
        name: "AuctionActive",
        msg: "Auction Active!"
      },
      {
        code: 6032,
        name: "ReservePriceActive",
        msg: "Reserve Price Active!"
      },
      {
        code: 6033,
        name: "AuctionEnded",
        msg: "Auction Ended!"
      },
      {
        code: 6034,
        name: "AuctionNotStarted",
        msg: "Auction Not Started!"
      },
      {
        code: 6035,
        name: "CannotCancelHighestBid",
        msg: "Cannot Cancel Highest Bid!"
      },
      {
        code: 6036,
        name: "NotEnoughFunds",
        msg: "Not Enough Funds!"
      }
    ],
    metadata: {
      address: "C35kaD3YLHBVMxwsxnre227XwgJo8gSN8jnrfThmfuUg"
    }
  }

export const IDL: CardinalStakePool =
{
  version: "0.1.0",
  name: "nexus",
  instructions: [
    {
      name: "initUser",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "info",
          type: {
            defined: "UserInfo"
          }
        }
      ]
    },
    {
      name: "updateUser",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "info",
          type: {
            defined: "UpdateUserInfo"
          }
        }
      ]
    },
    {
      name: "closeUser",
      accounts: [
        {
          name: "user",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    },
    {
      name: "initProject",
      accounts: [
        {
          name: "project",
          isMut: true,
          isSigner: false
        },
        {
          name: "founder",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "info",
          type: {
            defined: "ProjectInfo"
          }
        }
      ]
    },
    {
      name: "updateProject",
      accounts: [
        {
          name: "project",
          isMut: true,
          isSigner: false
        },
        {
          name: "founder",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "info",
          type: {
            defined: "UpdateProjectInfo"
          }
        }
      ]
    },
    {
      name: "initInvitation",
      accounts: [
        {
          name: "invitation",
          isMut: true,
          isSigner: false
        },
        {
          name: "project",
          isMut: true,
          isSigner: false
        },
        {
          name: "user",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: "role",
          type: "string"
        }
      ]
    },
    {
      name: "acceptInvt",
      accounts: [
        {
          name: "apa",
          isMut: true,
          isSigner: false
        },
        {
          name: "invitation",
          isMut: true,
          isSigner: false
        },
        {
          name: "project",
          isMut: true,
          isSigner: false
        },
        {
          name: "user",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    },
    {
      name: "refuseInvt",
      accounts: [
        {
          name: "invitation",
          isMut: true,
          isSigner: false
        },
        {
          name: "project",
          isMut: false,
          isSigner: false
        },
        {
          name: "user",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    },
    {
      name: "removeUser",
      accounts: [
        {
          name: "apa",
          isMut: true,
          isSigner: false
        },
        {
          name: "invitation",
          isMut: true,
          isSigner: false
        },
        {
          name: "project",
          isMut: true,
          isSigner: false
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false
        },
        {
          name: "founder",
          isMut: true,
          isSigner: false
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    }
  ],
  accounts: [
    {
      name: "Founder",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "address",
            type: "publicKey"
          },
          {
            name: "name",
            type: "string"
          },
          {
            name: "image",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "roles",
            type: "string"
          },
          {
            name: "levelOfExpertise",
            type: "string"
          },
          {
            name: "paymentRatePerHour",
            type: "string"
          },
          {
            name: "profileOverview",
            type: "string"
          },
          {
            name: "links",
            type: "string"
          }
        ]
      }
    },
    {
      name: "User",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "address",
            type: "publicKey"
          },
          {
            name: "nigotion",
            type: "bool"
          },
          {
            name: "paymentRatePerHour",
            type: "u64"
          },
          {
            name: "name",
            type: "string"
          },
          {
            name: "image",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "roles",
            type: "string"
          },
          {
            name: "levelOfExpertise",
            type: "string"
          },
          {
            name: "profileOverview",
            type: "string"
          },
          {
            name: "links",
            type: "string"
          }
        ]
      }
    },
    {
      name: "Project",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "founder",
            type: "publicKey"
          },
          {
            name: "hiring",
            type: "bool"
          },
          {
            name: "jobs",
            type: "u16"
          },
          {
            name: "members",
            type: "u16"
          },
          {
            name: "name",
            type: "string"
          },
          {
            name: "logo",
            type: "string"
          },
          {
            name: "linkThread",
            type: "string"
          },
          {
            name: "linkDiscord",
            type: "string"
          },
          {
            name: "linkWebsite",
            type: "string"
          },
          {
            name: "linkTwitter",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "chain",
            type: "string"
          },
          {
            name: "projectOverview",
            type: "string"
          }
        ]
      }
    },
    {
      name: "OneTimePayment",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "founder",
            type: "publicKey"
          },
          {
            name: "reciever",
            type: "publicKey"
          },
          {
            name: "paymentRatePerHour",
            type: "u64"
          },
          {
            name: "workingHours",
            type: "u64"
          },
          {
            name: "startAt",
            type: "i64"
          },
          {
            name: "lastUpdateAt",
            type: "i64"
          },
          {
            name: "endAt",
            type: "i64"
          },
          {
            name: "authority",
            type: "publicKey"
          },
          {
            name: "live",
            type: "bool"
          }
        ]
      }
    },
    {
      name: "Invt",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "project",
            type: "publicKey"
          },
          {
            name: "user",
            type: "publicKey"
          },
          {
            name: "status",
            type: "u8"
          },
          {
            name: "role",
            type: "string"
          },
          {
            name: "name",
            type: "string"
          },
          {
            name: "projectDescription",
            type: "string"
          }
        ]
      }
    },
    {
      name: "APA",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user",
            type: "publicKey"
          },
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "project",
            type: "publicKey"
          },
          {
            name: "name",
            type: "string"
          },
          {
            name: "role",
            type: "string"
          }
        ]
      }
    },
    {
      name: "Identifier",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bump",
            type: "u8"
          },
          {
            name: "count",
            type: "u64"
          }
        ]
      }
    }
  ],
  types: [
    {
      name: "PaymentInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "paymentRatePerHour",
            type: "u64"
          },
          {
            name: "workingHours",
            type: "u64"
          },
          {
            name: "endAt",
            type: "i64"
          },
          {
            name: "roles",
            type: "string"
          }
        ]
      }
    },
    {
      name: "ProjectInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string"
          },
          {
            name: "logo",
            type: "string"
          },
          {
            name: "linkDiscord",
            type: "string"
          },
          {
            name: "linkThread",
            type: "string"
          },
          {
            name: "linkWebsite",
            type: "string"
          },
          {
            name: "linkTwitter",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "projectOverview",
            type: "string"
          },
          {
            name: "hiring",
            type: "bool"
          }
        ]
      }
    },
    {
      name: "UpdateProjectInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string"
          },
          {
            name: "logo",
            type: "string"
          },
          {
            name: "linkDiscord",
            type: "string"
          },
          {
            name: "linkThread",
            type: "string"
          },
          {
            name: "linkWebsite",
            type: "string"
          },
          {
            name: "linkTwitter",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "roles",
            type: "string"
          },
          {
            name: "projectOverview",
            type: "string"
          },
          {
            name: "hiring",
            type: "bool"
          }
        ]
      }
    },
    {
      name: "UserInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string"
          },
          {
            name: "image",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "roles",
            type: "string"
          },
          {
            name: "levelOfExpertise",
            type: "string"
          },
          {
            name: "paymentRatePerHour",
            type: "u64"
          },
          {
            name: "profileOverview",
            type: "string"
          },
          {
            name: "links",
            type: "string"
          },
          {
            name: "nigotion",
            type: "bool"
          }
        ]
      }
    },
    {
      name: "UpdateUserInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "string"
          },
          {
            name: "image",
            type: "string"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "roles",
            type: "string"
          },
          {
            name: "levelOfExpertise",
            type: "string"
          },
          {
            name: "paymentRatePerHour",
            type: "u64"
          },
          {
            name: "profileOverview",
            type: "string"
          },
          {
            name: "links",
            type: "string"
          },
          {
            name: "nigotion",
            type: "bool"
          }
        ]
      }
    }
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidNftCollection",
      msg: "not the right collection"
    },
    {
      code: 6001,
      name: "MissingNft",
      msg: "missing nft"
    },
    {
      code: 6002,
      name: "PublicKeyMismatch",
      msg: "PublicKey Mismatch!"
    },
    {
      code: 6003,
      name: "PaymentNotLive",
      msg: "Payment Not Live!"
    },
    {
      code: 6004,
      name: "Uninitialized",
      msg: "Uninitialized!"
    },
    {
      code: 6005,
      name: "AccountNotFound",
      msg: "account not found"
    },
    {
      code: 6006,
      name: "RemainingAccountNotFound",
      msg: "remaining account not found"
    },
    {
      code: 6007,
      name: "MissionAlreadyDone",
      msg: "you already did that mission!"
    },
    {
      code: 6008,
      name: "IncorrectOwner",
      msg: "Incorrect Owner!"
    },
    {
      code: 6009,
      name: "InstructionBuilderFailed",
      msg: "invalide transfer builder instraction"
    },
    {
      code: 6010,
      name: "BumpNotFound",
      msg: "bump not found"
    },
    {
      code: 6011,
      name: "InvalidCalculation",
      msg: "Invalid calculation"
    },
    {
      code: 6012,
      name: "InvalidShare",
      msg: "Invalid share"
    },
    {
      code: 6013,
      name: "NoShareLeft",
      msg: "No share left!"
    },
    {
      code: 6014,
      name: "NotEnoughShareLeft",
      msg: "No enough share left!"
    },
    {
      code: 6015,
      name: "NotEnoughShare",
      msg: "No enough share!"
    },
    {
      code: 6016,
      name: "NotTheCreator",
      msg: "Not the fract nft Creator!"
    },
    {
      code: 6017,
      name: "MintAlreadyStart",
      msg: "Mint already start!"
    },
    {
      code: 6018,
      name: "MintNotEndYet",
      msg: "Mint Not End Yet!"
    },
    {
      code: 6019,
      name: "TokenAccountNotOwnedByCreator",
      msg: "Token Account Not Owned By Creator!"
    },
    {
      code: 6020,
      name: "NoFractNftPlaced",
      msg: "No Fract Nft Placed!"
    },
    {
      code: 6021,
      name: "CannotInitVoteWithListedShare",
      msg: "Cannot Init Vote With Listed Share!"
    },
    {
      code: 6022,
      name: "CannotInitPriceReserveWithListedShare",
      msg: "Cannot Init Price Reserve With Listed Share!"
    },
    {
      code: 6023,
      name: "CannotVoteWithListedShare",
      msg: "Cannot Vote With Listed Share!"
    },
    {
      code: 6024,
      name: "CannotListedWithVoteState",
      msg: "Cannot Listed With Vote State!"
    },
    {
      code: 6025,
      name: "InvalidPercentage",
      msg: "Invalid Percentage!"
    },
    {
      code: 6026,
      name: "NotTheRightState",
      msg: "Not The Right State!"
    },
    {
      code: 6027,
      name: "NotHighestBidder",
      msg: "Not Highest Bidder!"
    },
    {
      code: 6028,
      name: "BelowReservePrice",
      msg: "Below Reserve Price!"
    },
    {
      code: 6029,
      name: "BelowBidIncrement",
      msg: "Below Bid Increment!"
    },
    {
      code: 6030,
      name: "BidTooLow",
      msg: "Bid Too Low!"
    },
    {
      code: 6031,
      name: "AuctionActive",
      msg: "Auction Active!"
    },
    {
      code: 6032,
      name: "ReservePriceActive",
      msg: "Reserve Price Active!"
    },
    {
      code: 6033,
      name: "AuctionEnded",
      msg: "Auction Ended!"
    },
    {
      code: 6034,
      name: "AuctionNotStarted",
      msg: "Auction Not Started!"
    },
    {
      code: 6035,
      name: "CannotCancelHighestBid",
      msg: "Cannot Cancel Highest Bid!"
    },
    {
      code: 6036,
      name: "NotEnoughFunds",
      msg: "Not Enough Funds!"
    }
  ],
  metadata: {
    address: "C35kaD3YLHBVMxwsxnre227XwgJo8gSN8jnrfThmfuUg"
  }
}