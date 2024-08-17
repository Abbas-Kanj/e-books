import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

type Props = {
  book: Book;
};

const ShareButtons = ({ book }: Props) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/books/${book._id}`;
  return (
    <div className="card w-80">
      <div className="card-body items-center text-center gap-7">
        <h2 className="card-title text-lg">Share with your network:</h2>
        <div className="card-actions justify-end">
          <div className="flex gap-3 justify-center pb-5">
            <FacebookShareButton
              url={shareUrl}
              hashtag={`#${book.title}`}
              className="hover:opacity-45"
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <TwitterShareButton
              url={shareUrl}
              title={book.title}
              hashtags={[`${book.genre}`]}
              className="hover:opacity-45"
            >
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            <WhatsappShareButton
              url={shareUrl}
              title={book.title}
              separator=":: "
              className="hover:opacity-45"
            >
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            <EmailShareButton
              url={shareUrl}
              subject={book.title}
              body={`Check out this book: ${shareUrl}`}
              className="hover:opacity-45"
            >
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareButtons;
