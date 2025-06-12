import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Candy, Trash2Icon } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserLineChart from "@/components/UserLineChart";

const SingleUserPage = () => {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Aykut Vercan</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                <div className=" w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className=" text-xl font-bold">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit user</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">
                                    Profile completion
                                </p>
                                <Progress value={48} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>Aykut vercan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span>+1 234 114 12 34</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>Aykutvrcn@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>Ankara, Tr</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Joined on 2024</p>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className=" text-lg font-bold">User Badges</h1>
                        <div className=" flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-blue-600/30 border-1 border-blue-500/50 p-2 "
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the admin
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy
                                        size={36}
                                        className="rounded-full bg-red-600/30 border-1 border-red-500/50 p-2 "
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the admin
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Trash2Icon
                                        size={36}
                                        className="rounded-full bg-yellow-600/30 border-1 border-yellow-blue-500/50 p-2 "
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the admin
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transaction" />
                    </div>
                </div>
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-4">
                        <div className=" flex items-center gap-4">
                            <Avatar className="size-14">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/61746019?v=4" />
                                <AvatarFallback>AV</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-bold">Aykut Vercan</h1>
                        </div>
                        <p className="text-sm text-muted-foreground ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                            magni, tempora non aliquid quisquam tempore quo consequuntur
                            veniam saepe corrupti voluptatum consequatur eveniet vero
                            voluptates, nemo est, excepturi mollitia. Reprehenderit!
                        </p>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                            <h1 className="text-xl font-bold mb-4">User Activity</h1>
                        <UserLineChart/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUserPage;
