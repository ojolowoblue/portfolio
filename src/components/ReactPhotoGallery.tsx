import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

type GalleryItem = {
  title: string;
  img: string;
  desc?: string;
  url?: string;
  tags?: string[];
};

type ReactPhotoGalleryProps = {
  items: GalleryItem[];
};

export default function ReactPhotoGallery({ items }: ReactPhotoGalleryProps) {
  return (
    <PhotoProvider maskOpacity={0.9}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <PhotoView src={item.img}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover cursor-zoom-in"
                loading="lazy"
              />
            </PhotoView>
            <div className="card-body p-4">
              <h3 className="card-title text-base">{item.title}</h3>
              {item.desc ? (
                <p className="text-sm text-base-content/70">{item.desc}</p>
              ) : null}
              {item.tags && item.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge badge-ghost">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </PhotoProvider>
  );
}
