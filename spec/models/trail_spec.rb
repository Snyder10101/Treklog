require 'rails_helper'

RSpec.describe Trail, type: :model do
  it "should validate name" do
    trail = Trail.create(location:"San Diego,CA", distance:"5km", duration:"2hrs", difficulty:"beginner", description:"down and back", image: 'url.url')
    expect(trail.errors[:name]).to_not be_empty
  end
  it "should validate location" do
    trail = Trail.create(name:'big trail', distance:"5km", duration:"2hrs", difficulty:"beginner", description:"down and back", image: 'url.url')
    expect(trail.errors[:location]).to_not be_empty
  end
  it "should validate distance" do
    trail = Trail.create(name:'big trail', location:"San Diego,CA", duration:"2hrs", difficulty:"beginner", description:"down and back", image: 'url.url')
    expect(trail.errors[:distance]).to_not be_empty
  end
  it "should validate duration" do
    trail = Trail.create(name:'big trail', location:"San Diego,CA", distance:"5km",  difficulty:"beginner", description:"down and back", image: 'url.url')
    expect(trail.errors[:duration]).to_not be_empty
  end
  it "should validate difficulty" do
    trail = Trail.create(name:'big trail', location:"San Diego,CA", distance:"5km", duration:"2hrs", description:"down and back", image: 'url.url')
    expect(trail.errors[:difficulty]).to_not be_empty
  end
  it "should validate description" do
    trail = Trail.create(name:'big trail', location:"San Diego,CA", distance:"5km", duration:"2hrs", difficulty:"beginner", image: 'url.url')
    expect(trail.errors[:description]).to_not be_empty
  end
  it "should validate image" do
    trail = Trail.create(name:'big trail', location:"San Diego,CA", distance:"5km", duration:"2hrs", difficulty:"beginner", description:"down and back")
    expect(trail.errors[:image]).to_not be_empty
  end
  it " should contain a trail name more than 5 characters" do
    trail = Trail.create(name:'trai', location:"San Diego,CA", distance:"5km", duration:"2hrs", difficulty:"beginner", description:"down and back", image: 'url.url')
    expect(trail.errors[:name]).to_not be_empty
  end
  it " should contain a description more than 10 characters" do
    trail = Trail.create(name:'big trail', location:"San Diego,CA", distance:"5km", duration:"2hrs", difficulty:"beginner", description:"down", image: 'url.url')
    expect(trail.errors[:description]).to_not be_empty
  end
end


