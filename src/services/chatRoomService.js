import { API, graphqlOperation, Auth } from "aws-amplify";

export const getCOmmonChatRoomWithUser = async (userID) => {
  const authUser = await Auth.currentAuthenticatedUser();
  //get all chatroom user1
  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
  );

  const chatRooms = response.data?.getUser?.ChatRooms?.items || [];
  console.log(chatRooms);

  const chatRoom = chatRooms.find((chatRoomItem) => {
   return chatRoomItem.chatRoom.users.items.some(
    (userItem) => userItem.user.id === userID);
  });

  return chatRoom
  //get all chat rooms of user2

  //remove chat rooms with more than 2 users

  // get the common chat rooms
};

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
