var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/policy', function (req, res, next) {
  res.json(
    [
      {
        "policyTitle": "Savings & Investments Plan",
        "policyDesc": "Savings and Investment plans help you save regularly and be adequately prepared to meet family’s financial needs in the future. These online investment plans offer various features that help meet your specific financial needs with investments made according to your appetite to take risks.",
        "imageUrl": "https://www.policybazaar.com/images/top-investment-plan-with-low-but-guaranteed-return.jpg"
      },
      {
        "policyTitle": "Health Plans",
        "policyDesc": "Health Insurance is a kind of insurance that provides coverage for medical expenses to the policy holder. Depending on the health insurance plan chosen the policy holder can get coverage for critical illness expenses, surgical expenses, hospital expenses etc. A Health insurance plan helps cushion your family finances from unexpected large medical expenses. It helps meet various health insurance needs be it based on the life stage of a person or a specific disease.",
        "imageUrl": "https://www.policybazaar.com/images/Health/health-insurance-is-necessary-for-senior-citizens.jpg"
      },
      {
        "policyTitle": "Child plans:",
        "policyDesc": "Child plans basically help in financial planning for your child's future needs at the right age. As a parent you can secure your child’s future with plans that encompass children insurance plans and children education plans. Financial protection features in child plans ensure that your child gets the best in the future even in your absence. They provide the ideal combo of protection and savings thanks to the many features of these children plans and make them perfect birthday gifts for your child",
        "imageUrl": "https://www.policybazaar.com/images/Life/things-to-look-child-insurance-plan.jpg"
      }
    ]
  );
});
module.exports = router;
