function logReqRes(req, res, next)  {
  console.log(`📥 ${req.method} ${req.url} at ${new Date().toLocaleString()}`);
  next();
}
function logResReq2(err, req, res, next){
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: err.message || "Something went wrong!" });
}
module.exports={logReqRes,logResReq2};