import React from "react"

export const Badge = ({ badge }: { badge: string }) => {
  const bgClasses = () => {
    let classes = ""

    switch (badge.toLowerCase()) {
      case "drama":
        classes = "bg-orange-100 text-orange-600"
        break
      case "crime":
        classes = "bg-red-100 text-red-600"
        break
      case "fantasy":
        classes = "bg-zinc-100  text-zinc-600"
        break
      case "music":
        classes = "bg-amber-100 text-amber-600"
        break
      case "adventure":
        classes = "bg-lime-100  text-lime-600"
        break
      case "history":
        classes = "bg-green-100 text-green-600"
        break
      case "family":
        classes = "bg-cyan-100  text-cyan-600"
        break
      case "animation":
        classes = "bg-teal-100 text-teal-600"
        break
      case "thriller":
        classes = "bg-emerald-100 text-emerald-600"
        break
      case "biography":
        classes = "bg-blue-100 text-blue-600"
        break
      case "mystery":
        classes = "bg-sky-100 text-sky-600"
        break
      case "sci-fi":
        classes = " bg-purple-100 text-purple-600"
        break
      case "romance":
        classes = "bg-violet-100  text-violet-600"
        break
      case "action":
        classes = "bg-indigo-100 text-indigo-600"
        break
      case "comedy":
        classes = "bg-yellow-100 text-yellow-600"
        break
      case "sport":
        classes = "bg-fuchsia-100 text-fuchsia-600;"
        break
      case "musical":
        classes = "bg-rose-100 text-rose-600"
        break
      case "horror":
        classes = "bg-pink-100 text-pink-600"
        break
      case "western":
        classes = "bg-violet-100  text-violet-600"
        break
      case "film-noir ":
        classes = "bg-indigo-100 text-indigo-600"
        break
      case "war":
        classes = "bg-fuchsia-100 text-fuchsia-600"
        break

      default:
        classes = "bg-red-100 text-red-600"
        break
    }

    return classes
  }
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${bgClasses()}`}
    >
      {badge}
    </span>
  )
}
