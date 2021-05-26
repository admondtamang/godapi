// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    console.log(process.env.GITHUB_SECRET);
    res.status(200).json({ name: "John Doe" });
};
