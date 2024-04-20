import { Helmet } from "react-helmet-async";

const Faqs = () => {
  return (
    <div className="hero  bg-base-200">
      <Helmet>
        <title>Taqwa Terraces | FAQs</title>
      </Helmet>
      <div className="hero-content flex-col ">
        <div className="grid w-[90vw] lg:w-[75vw] grid-cols-1 lg:grid-cols-2 gap-4 ">
        <img
          src="/rsz_slide-1.jpg"
          className="h-[400px] w-[90vw] rounded-lg shadow-2xl"
        />
        <img
          src="/rsz_slide-2.jpg"
          className="h-[400px] w-[90vw] rounded-lg shadow-2xl"
        />
        </div>
        
        <div className="join join-vertical w-full">
          {/* faqs */}
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-blue-600">
              How do I purchase a property?
            </div>
            <div className="collapse-content">
              <p className=" text-gray-600 font-medium">To purchase a property, you can start by browsing our listings on our website. Once you find a property you are interested in, you can contact the seller or agent listed on the property page to schedule a viewing and discuss the purchasing process.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-semibold text-blue-600">
            What is the difference between buying and renting?
            </div>
            <div className="collapse-content">
              <p className=" text-gray-600 font-medium">Buying a property involves purchasing it outright and becoming the owner, while renting involves paying a periodic fee to live in the property owned by someone else. Buying offers long-term stability and potential investment benefits, while renting offers flexibility and less responsibility for maintenance.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-semibold text-blue-600">
            Can I get a mortgage for purchasing a property?
            </div>
            <div className="collapse-content">
              <p className=" text-gray-600 font-medium">Yes, you can apply for a mortgage from a bank or financial institution to finance the purchase of a property. A mortgage is a loan specifically for purchasing real estate, and it typically involves monthly payments over a fixed term. The terms and eligibility criteria for mortgages vary depending on factors such as your credit history, income, and the property you are purchasing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
