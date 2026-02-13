import type { LayoutType } from "../types/types";


export const spaces = [
  { id: "kitchen", label: "آشپزخانه" },
  { id: "living", label: "پذیرایی" },
  { id: "dining", label: "ناهار خوری" },
  { id: "bedroom", label: "اتاق خواب" },
  { id: "bathroom", label: "سرویس بهداشتی" },
];

export const styles = [
  { id: "all", label: "همه" },
  { id: "modern", label: "مدرن" },
  { id: "minimal", label: "مینیمال" },
  { id: "classic", label: "کلاسیک" },
  { id: "neoclassic", label: "نئوکلاسیک" },
  { id: "traditional", label: "سنتی" },
  { id: "scandi", label: "اسکاندیناوی" },
  { id: "rustic", label: " روستیک" },
  { id: "bohemian", label: "بوهمی" },
];



// ---------- DATA ----------

export const layouts: LayoutType[] = [
  {
    id: "kitchen-modern-1",
    spaceId: "kitchen",
    styleId: "modern",
    image: "https://www.mrcabinetcare.com/wp-content/uploads/Modern-Kitchen-Design-Ideas.jpg",
    experience: {
      model: {
        glb: "/models/products/Untitled4.glb",
        usdz: "/models/products/Untitled4.usdz",
      },

      ar: {
        enabled: true,
        scale: {
          min: "0.5 0.5 0.5",
          max: "2 2 2",
        },
      },

      qr: {
        enabled: true,
        size: 220,
      },
    },

    products: [
      {
        category: "مبل",
        selected: {
          id: "sofa-1",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa4ZqxisHEQhQYkqFp7-cFHaLeoCFtfY4pg&s",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
        },
        alternatives: [
          {
          id: "sofa-2",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7puLytvEYGldhBvZi2DbtvOghuouK6u4yA&s",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
        ],
      },
      {
        category: "فرش",
        selected: {
          id: "carpet-1",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://images.thdstatic.com/productImages/ffd0d73b-92bc-40af-9c60-209464970296/svn/matte-black-pendant-lights-4500p8-mb-64_600.jpg",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
        },
        alternatives: [
          {
          id: "carpet-2",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://www.bespokelights.co.uk/images/beso-retro-style-dark-bronze-ceiling-pendant-light-medium-p2379-5450_related.jpg",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
          {
          id: "carpet-3",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLhR40Xg9Bg1xdQ4i898c9gpW1nkZFlpVTQ&s",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
        ],
      },
      {
        category: "چراغ",
        selected: {
          id: "light-1",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://images.thdstatic.com/productImages/ffd0d73b-92bc-40af-9c60-209464970296/svn/matte-black-pendant-lights-4500p8-mb-64_600.jpg",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
        },
        alternatives: [
          {
          id: "light-2",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://www.bespokelights.co.uk/images/beso-retro-style-dark-bronze-ceiling-pendant-light-medium-p2379-5450_related.jpg",
          experience: {
            model: {
              glb: "/models/products/Untitled4.glb",
              usdz: "/models/products/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
          {
          id: "light-3",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLhR40Xg9Bg1xdQ4i898c9gpW1nkZFlpVTQ&s",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
        ],
      },
      {
        category: "پرده",
        selected: {
          id: "curtain-1",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://images.thdstatic.com/productImages/ffd0d73b-92bc-40af-9c60-209464970296/svn/matte-black-pendant-lights-4500p8-mb-64_600.jpg",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
        },
        alternatives: [
          {
          id: "curtain-2",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://www.bespokelights.co.uk/images/beso-retro-style-dark-bronze-ceiling-pendant-light-medium-p2379-5450_related.jpg",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
          {
          id: "curtain-3",
          name: "مبل راحتی مدرن",
          brand: "ایکیا",
          style: "مدرن",
          material: "پارچه نانو",
          color: "طوسی روشن",
          dimensions: "220×90×85",
          quantity: 1,
          price: 12000000,
          description: "مبل سه نفره مناسب فضای مدرن با پارچه ضد لک",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBLhR40Xg9Bg1xdQ4i898c9gpW1nkZFlpVTQ&s",
          experience: {
            model: {
              glb: "/models/layouts/Untitled4.glb",
              usdz: "/models/layouts/Untitled4.usdz",
            },

            ar: {
              enabled: true,
              scale: {
                min: "0.5 0.5 0.5",
                max: "2 2 2",
              },
            },

            qr: {
              enabled: true,
              size: 220,
            },
          },
          },
        ],
      },

    ],
  },


];

