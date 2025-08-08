import { useState } from "react";

export default function LikeButton() {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        if(liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked)
    }

    const resetClick = () => {
        setLikes(0);
        setLiked(false);
    }

    return (
        <div>
            <p>좋아요 수 : {likes}개</p>
            {/* <button onClick={() => setLikes(likes + 1)}>좋아요</button> */}

            <button onClick={handleClick}>{liked ? '좋아요취소' : '좋아요'}</button>
            <button onClick={resetClick}>초기화</button>
        </div>
    );
}

