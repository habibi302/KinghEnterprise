import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useLocation, useNavigate } from "react-router-dom";

export default function App() {

  const location = useLocation();
  const navigate = useNavigate();

    return (
        <PayPalScriptProvider options={{ "client-id": "AQaykxIcxbmUvbssHWK94266LPgiEeg8RLDwferSg1RG6zLAsd33w8ZwcwCQhxeOqkRUPEJJVEwenwer" }}>
            <PayPalButtons
              className="text-center pt-5"
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: location.state.total,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        navigate("/confirmorder", {state: {isOrderCompleted: true}});
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}