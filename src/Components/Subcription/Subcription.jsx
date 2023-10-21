import FreePlan from "./FreePlan";
import MovieSubscriptionCard from "./MovieSubcriptionPlan";
import ProPlanCard from "./ProPlan";

const PricingCard = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 max-w-6xl gap-3  mx-auto">
      <div className="order-3 md:order-none free-plan">
      <MovieSubscriptionCard></MovieSubscriptionCard>
      </div>
      <ProPlanCard></ProPlanCard>
      <div className="order-1 md:order-none">
      </div>
      <div className="order-2 md:order-none">
      <FreePlan></FreePlan>
      </div>
    </div>
  );
};

export default PricingCard;
