import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../Auth/firebase.config";
import { toast } from "react-toastify";

export const getUserDetails = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const userData = userCred.providerData[0];
        const unsubscribe = onSnapshot(
          doc(db, "users", userData?.uid),
          (_doc) => {
            if (_doc.exists()) {
              resolve(_doc.data());
            } else {
              setDoc(doc(db, "users", userData?.uid), userData).then(() => {
                resolve(userData);
              });
            }
          }
        );
        return unsubscribe;
      } else {
        reject(new Error("User is not authenticated"));
      }

      unsubscribe();
    });
  });
};

// export const saveToCollections = async (user, data) => {
//   if (!user?.collections?.includes(data?.id)) {
//     const docRef = doc(db, "users", user?.uid);
//     await updateDoc(docRef, {
//       collections: arrayUnion(data),
//     })
//       .then(() => toast.success("Saved To Collections"))
//       .catch((err) => toast.error(`Error : ${err.message}`));
//   } else {
//     const docRef = doc(db, "users", user?.uid);
//     await updateDoc(docRef, {
//       collections: arrayRemove(data?.id),
//     })
//       .then(() => toast.success("Removed From Collections"))
//       .catch((err) => toast.error(`Error : ${err.message}`));
//   }
// };

export const saveToCollections = async (user, data) => {
  let updatedCollections;
  const isLiked = user.collections.some((item) => item.id === data.id);

  if (!isLiked) {
    updatedCollections = [...user.collections, data];
    toast.success("Saved To Collections");
  } else {
    updatedCollections = user.collections.filter((item) => item.id !== data.id);
    toast.success("Removed From Collections");
  }

  const docRef = doc(db, "users", user.uid);

  try {
    await updateDoc(docRef, {
      collections: updatedCollections,
    });
    return { ...user, collections: updatedCollections };
  } catch (error) {
    toast.error(`Error : ${error.message}`);
    return user;
  }
};

// export const saveToLikes = async (user, data) => {
//   if (!user?.likes?.includes(data?.id)) {
//     const docRef = doc(db, "users", user?.uid);
//     await updateDoc(docRef, {
//       likes: arrayUnion(data),
//     })
//       .then(() => toast.success("Like"))
//       .catch((err) => toast.error(`Error : ${err.message}`));
//   } else {
//     const docRef = doc(db, "users", user?.uid);
//     await updateDoc(docRef, {
//       likes: arrayRemove(data),
//     })
//       .then(() => toast.success("Unlike"))
//       .catch((err) => toast.error(`Error : ${err.message}`));
//   }
// };
export const saveToLikes = async (user, data) => {
  let updatedLikes;
  const isLiked = user.likes.some((item) => item.id === data.id);

  if (!isLiked) {
    updatedLikes = [...user.likes, data];
    toast.success("Like");
  } else {
    updatedLikes = user.likes.filter((item) => item.id !== data.id);
    toast.success("Unlike");
  }

  const docRef = doc(db, "users", user.uid);

  try {
    await updateDoc(docRef, {
      likes: updatedLikes,
    });
    return { ...user, likes: updatedLikes };
  } catch (error) {
    toast.error(`Error : ${error.message}`);
    return user;
  }
};
