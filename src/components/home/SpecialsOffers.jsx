const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <div className="sections flex flex-col tablet:flex-row tablet:space-x-3 laptop:justify-around">
        <section className="section-1 w-full tablet:max-w-[400px]">
          <div className="hidden laptop:flex flex-wrap justify-between bg-blue-100 items-start rounded-lg p-3 shadow-cardShadow mb-2 desktop:h-[45.8%] min-h-[70px]">
            <p className="font-semibold text-sm">Reserve pickup or delivery</p>
            <button className="bg-white border border-black font-semibold text-gray-900 rounded-full py-[0.4rem] px-3 text-sm min-w-[100.41px] hover:border-2">
              See times
            </button>
          </div>
          <div className="section-1__bottom my-3 p-3 rounded-lg shadow-cardShadow tablet:mt-0 tablet:min-h-[340px] laptop:min-h-[0]">
            <div className="header flex items-center justify-between">
              <p className="font-semibold">Top departments</p>
              <a href="#" className="text-sm underline">
                View all
              </a>
            </div>
            <div className="products flex items-center justify-around mt-3 flex-wrap space-x-3">
              <div className="product-1 cursor-pointer">
                <div className="product-1__img bg-gray-200 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Electronics"
                    className="rounded-full h-[80px] w-[80px] object-cover"
                  />
                </div>
                <p className="text-sm text-center mt-1">Electronics</p>
              </div>
              <div className="product-2 cursor-pointer">
                <div className="product-2__img bg-gray-200 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1560529178-855fa2041193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGxlZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Toys"
                    className="rounded-full h-[80px] w-[80px] object-cover"
                  />
                </div>
                <p className="text-sm text-center mt-1">Toys</p>
              </div>
              <div className="product-3 cursor-pointer">
                <div className="product-3__img bg-gray-200 rounded-full w-[100px] h-[100px] flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHdvbWFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Fashion"
                    className="rounded-full h-[80px] w-[80px] object-cover"
                  />
                </div>
                <p className="text-sm text-center mt-1">Fashion</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2 w-full shadow-cardShadow my-3 rounded-lg p-3 tablet:mt-0 tablet:max-w-[400px]">
          <p className="font-semibold">Hurry & save big</p>
          <div className="offers grid grid-cols-2 space-x-2 space-y-2 items-center">
            <div className="1 col-span-1 flex flex-col items-center cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-f9e3/k2-_21c6a8fc-ad20-4b75-b5d5-5461ebd60244.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Toys Clearance"
              />
              <p className="text-xs text-center">Toys clearance</p>
            </div>
            <div className="2 col-span-1 flex flex-col items-center cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-9144/k2-_17adbd9f-1107-478d-8b24-513f3cdb83ae.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Seasonal decor collections"
              />
              <p className="text-xs text-center">Seasonal decor clearance</p>
            </div>
            <div className="3 col-span-1 flex flex-col items-center cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-4638/k2-_2e23bd9f-a251-49fa-bf44-433962f8bdf4.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Home clearance"
              />
              <p className="text-xs text-center">Home clearance</p>
            </div>
            <div className="4 col-span-1 flex flex-col items-center cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-6a97/k2-_2ab57b9e-7ac3-4190-85e3-334ca5dab782.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Fashion clearance"
              />
              <p className="text-xs text-center">Fashion clearance</p>
            </div>
          </div>
        </section>
        <section className="section-3 w-full rounded-lg shadow-cardShadow p-3 my-3 tablet:mt-0 tablet:max-w-[400px]">
          <p className="font-semibold">New Year's celebration</p>
          <div className="offers grid grid-cols-2 space-x-2 space-y-2 items-center">
            <div className="1 col-span-1 flex flex-col items-center cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-3079/k2-_95c6c38f-f3aa-4799-b578-fa651411642d.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Party supplies"
              />
              <p className="text-sm">Party supplies</p>
            </div>
            <div className="2 col-span-1 flex flex-col items-center cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-b30b/k2-_594015e9-d96a-4c05-a166-46b9e5dbef8a.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Fashion"
              />
              <p className="text-sm">Fashion</p>
            </div>
            <div className="3 col-span-1 flex flex-col items-center  cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-909b/k2-_6898afc7-18c5-48a7-af8f-ae7349c5e2db.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Food"
              />
              <p className="text-sm">Food</p>
            </div>
            <div className="4 col-span-1 flex flex-col items-center  cursor-pointer">
              <img
                src="https://i5.walmartimages.com/dfw/4ff9c6c9-82da/k2-_51def70d-569e-4f50-b713-a4d2c73ab37a.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF"
                alt="Home"
              />
              <p className="text-sm">Home</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecialOffers;
