'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Image, ThumbsUp, Brain, Pencil, Moon, Bell, Mic } from "lucide-react"

export function GoalManifestor() {
  const [goal, setGoal] = useState("")
  const [gratitude, setGratitude] = useState("")
  const [limitingBelief, setLimitingBelief] = useState("")

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">AI Goal Manifestor</h1>
        <p className="text-xl text-muted-foreground">Manifest Your Dreams into Reality</p>
      </header>

      <Tabs defaultValue="goal" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="goal">Goal</TabsTrigger>
          <TabsTrigger value="vision">Vision Board</TabsTrigger>
          <TabsTrigger value="gratitude">Gratitude</TabsTrigger>
          <TabsTrigger value="beliefs">Limiting Beliefs</TabsTrigger>
        </TabsList>

        <TabsContent value="goal">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Goal Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What is your main goal?"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="mb-4"
              />
              <Button>Generate Goal Statement</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vision">
          <Card>
            <CardHeader>
              <CardTitle>Vision Board</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <Image className="w-8 h-8 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Image</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gratitude">
          <Card>
            <CardHeader>
              <CardTitle>Daily Gratitude Exercise</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What are you grateful for today?"
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
                className="mb-4"
              />
              <Button>Save Gratitude</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beliefs">
          <Card>
            <CardHeader>
              <CardTitle>Limiting Beliefs Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What limiting belief is holding you back?"
                value={limitingBelief}
                onChange={(e) => setLimitingBelief(e.target.value)}
                className="mb-4"
              />
              <Button>Challenge Belief</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <nav className="mt-8">
        <h2 className="text-xl font-semibold mb-4">More Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20">
            <Brain className="mr-2 h-4 w-4" /> Heal Inner Child
          </Button>
          <Button variant="outline" className="h-20">
            <Pencil className="mr-2 h-4 w-4" /> Scribing
          </Button>
          <Button variant="outline" className="h-20">
            <Moon className="mr-2 h-4 w-4" /> Nighttime Meditations
          </Button>
          <Button variant="outline" className="h-20">
            <Bell className="mr-2 h-4 w-4" /> Set Reminders
          </Button>
          <Button variant="outline" className="h-20">
            <Mic className="mr-2 h-4 w-4" /> Voice Recorder
          </Button>
        </div>
      </nav>
    </div>
  )
}