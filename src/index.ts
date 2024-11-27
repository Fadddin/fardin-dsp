import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/expone", (req: Request, res: Response) => {
    res.json({
        code: `clc;
clear all;
close all;

xn = input("Enter the range of x: ");
hn = input("Enter the range of h: ");
x = input("Enter the values of x: ");
h = input("Enter the values of h: ");

l = length(x);
m = length(h);

yn = min(xn)+min(hn):max(xn)+max(hn);
k = length(yn);
y = zeros(1,k);

for i = 1:k
  for j = 1:l
    p = i-j+1;
    if (p>0 && p< m+1)
      y(1,i)= y(1,i) + x(1, j) * x(1,p);
    end
  end
end
display("The output of the linear convolution : ");
y

subplot(3,1,1);
stem(xn,x);
grid on;
title('plot of xn');

subplot(3,1,2);
stem(hn,h);
grid on;
title('plot of hn');

subplot(3,1,3);
stem(yn,y);
grid on;
title('plot of yn');`,
        
    });
});

app.get("/download", (req: Request, res: Response) => {
    // Path to the file you want to serve
    const filePath = path.join(__dirname, "OddEven.m");

    // Set headers to indicate a file download
    res.download(filePath, "OddEven.m", (err) => {
        if (err) {
            console.error("File failed to download:", err);
            res.status(500).send("Error downloading file.");
        }
    });
});
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
